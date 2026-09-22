import os
import uuid
import threading
from flask import Flask, request, jsonify, send_file, after_this_request
from script import YouTubeDownloader

app = Flask(__name__, static_folder='assets')

# Memória de estado para progress tracking
tasks_state = {}

@app.route('/')
def serve_html():
    return send_file('index.html')

@app.route('/api/info', methods=['POST'])
def get_info():
    data = request.get_json()
    if not data or not data.get('url'):
        return jsonify({"status": "error", "message": "URL não fornecida"}), 400
    
    try:
        downloader = YouTubeDownloader()
        meta = downloader.extract_metadata(data['url'])
        return jsonify({"status": "success", "data": meta})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/api/start-download', methods=['POST'])
def start_download():
    data = request.get_json()
    url = data.get('url')
    media_type = data.get('type')
    
    if not url or not media_type:
        return jsonify({"status": "error", "message": "URL e tipo são obrigatórios"}), 400
    
    task_id = str(uuid.uuid4())
    tasks_state[task_id] = {
        "status": "processing",
        "progress": 0.0,
        "result": None,
        "error": None
    }
    
    def download_thread(t_id, d_url, d_type):
        def hook(d):
            if d['status'] == 'downloading':
                try:
                    # yt-dlp returns percent string like " 45.5%" or ANSI escape sequences
                    # safely extract the percentage
                    p_str = d.get('_percent_str', '0.0%')
                    # remove ansi color codes if any
                    import re
                    p_str = re.sub(r'\x1b\[[0-9;]*m', '', p_str)
                    percent = float(p_str.replace('%', '').strip())
                    tasks_state[t_id]['progress'] = percent
                except:
                    pass
            elif d['status'] == 'finished':
                tasks_state[t_id]['progress'] = 100.0

        try:
            downloader = YouTubeDownloader(output_dir="./temp_downloads")
            result = downloader.download(d_url, d_type, t_id, progress_hook=hook)
            tasks_state[t_id]['result'] = result
            tasks_state[t_id]['status'] = 'completed'
        except Exception as e:
            tasks_state[t_id]['error'] = str(e)
            tasks_state[t_id]['status'] = 'error'

    # Start backend thread
    thread = threading.Thread(target=download_thread, args=(task_id, url, media_type))
    thread.daemon = True
    thread.start()
    
    return jsonify({"status": "success", "task_id": task_id})

@app.route('/api/progress/<task_id>', methods=['GET'])
def get_progress(task_id):
    if task_id not in tasks_state:
        return jsonify({"status": "error", "message": "Task não encontrada"}), 404
    
    return jsonify({
        "status": "success",
        "task_status": tasks_state[task_id]['status'],
        "progress": tasks_state[task_id]['progress'],
        "error": tasks_state[task_id]['error']
    })

@app.route('/api/file/<task_id>', methods=['GET'])
def get_file(task_id):
    if task_id not in tasks_state or tasks_state[task_id]['status'] != 'completed':
        return jsonify({"status": "error", "message": "Arquivo não disponível"}), 400
        
    result = tasks_state[task_id]['result']
    file_path = result['absolute_path']
    filename = result['filename']
    
    @after_this_request
    def remove_file(response):
        try:
            os.remove(file_path)
            # Limpa o state
            if task_id in tasks_state:
                del tasks_state[task_id]
        except Exception as error:
            app.logger.error("Falha ao deletar arquivo cache: %s", error)
        return response
        
    return send_file(
        file_path,
        as_attachment=True,
        download_name=filename
    )

if __name__ == '__main__':
    from waitress import serve
    print("🚀 Servidor Flask (Waitress) rodando na porta 8000")
    serve(app, host="0.0.0.0", port=8000)
