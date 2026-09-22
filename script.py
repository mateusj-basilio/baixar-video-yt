import os
import time
import uuid
import glob
from pathlib import Path
import yt_dlp

class YouTubeDownloader:
    def __init__(self, output_dir: str = "./temp_downloads"):
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(parents=True, exist_ok=True)

    def extract_metadata(self, url: str) -> dict:
        opts = {
            'quiet': True,
            'no_warnings': True,
            'extract_flat': False,
            'noplaylist': True,
        }
        try:
            with yt_dlp.YoutubeDL(opts) as ydl:
                info = ydl.extract_info(url, download=False)
                thumbnail = info.get('thumbnail')
                if info.get('thumbnails'):
                    thumbnail = info['thumbnails'][-1]['url']

                description = info.get('description', '')
                if description and len(description) > 150:
                    description = description[:147] + '...'

                return {
                    "title": info.get('title', 'Vídeo Desconhecido'),
                    "thumbnail": thumbnail,
                    "description": description
                }
        except Exception as e:
            error_msg = str(e)
            if "playlist" in error_msg.lower():
                raise Exception("Ops! Este link é de uma playlist sem um vídeo específico. Por favor, cole o link de um único vídeo.")
            raise Exception(f"Falha ao obter dados: {error_msg}")

    def download(self, url: str, media_type: str, unique_id: str, progress_hook=None) -> dict:
        outtmpl = str(self.output_dir / f'%(title)s_{unique_id}.%(ext)s')

        opts = {
            'outtmpl': outtmpl,
            'quiet': True,
            'no_warnings': True,
            'noplaylist': True,
            'updatetime': False,
            'file_access_retries': 5,
            'concurrent_fragment_downloads': 10,
            'http_chunk_size': 10485760,
            'extractor_args': {
                'youtube': ['player_client=android']
            }
        }
        
        if progress_hook:
            opts['progress_hooks'] = [progress_hook]

        if media_type == 'video':
            opts.update({
                'format': 'bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]/best',
                'merge_output_format': 'mp4',
            })
        elif media_type == 'audio':
            opts.update({
                'format': 'bestaudio/best',
                'postprocessors': [{
                    'key': 'FFmpegExtractAudio',
                    'preferredcodec': 'mp3',
                    'preferredquality': '192',
                }],
            })
        elif media_type == 'thumb':
            opts.update({
                'skip_download': True,
                'writethumbnail': True,
            })
        else:
            raise ValueError("Tipo de mídia inválido.")

        try:
            with yt_dlp.YoutubeDL(opts) as ydl:
                info_dict = ydl.extract_info(url, download=True)
                
                if media_type == 'thumb':
                    search_pattern = str(self.output_dir / f"*_{unique_id}.*")
                    files = glob.glob(search_pattern)
                    if not files:
                        raise Exception("Thumbnail não encontrada.")
                    final_path = Path(files[0])
                    filename = final_path.name
                else:
                    expected_ext = 'mp4' if media_type == 'video' else 'mp3'
                    final_path = Path(ydl.prepare_filename(info_dict))
                    if final_path.suffix.lstrip('.') != expected_ext:
                        final_path = final_path.with_suffix(f'.{expected_ext}')
                    
                    filename = final_path.name

                return {
                    "absolute_path": str(final_path.resolve()),
                    "filename": filename
                }

        except Exception as e:
            error_str = str(e)
            if "WinError 32" in error_str and "->" in error_str:
                # Fallback cirúrgico para Windows Defender / ffmpeg lock
                import re
                match = re.search(r"'(.*?)'\s*->\s*'(.*?)'", error_str)
                if match:
                    src = Path(match.group(1))
                    dst = Path(match.group(2))
                    for _ in range(15):  # Tenta por até 15 segundos
                        try:
                            if dst.exists():
                                break
                            if src.exists():
                                src.rename(dst)
                                break
                        except OSError:
                            time.sleep(1)
                    
                    if dst.exists():
                        return {
                            "absolute_path": str(dst.resolve()),
                            "filename": dst.name
                        }
            raise Exception(f"Falha na extração/download: {e}")
