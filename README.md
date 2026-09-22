# BaixarVideoYT

BaixarVideoYT é uma aplicação web rápida e moderna para o download de vídeos e Shorts do YouTube sem perda de qualidade. Focada em entregar a melhor experiência, possui um design premium, suporte a Dark Mode nativo e um backend robusto capaz de contornar as limitações de velocidade (throttling) do YouTube usando spoofing de client Android.

## 🚀 Funcionalidades

- **Downloads Acelerados**: Supera restrições e lentidões do YouTube.
- **Alta Qualidade**: Baixa vídeos com resolução máxima original através da mesclagem de áudio e vídeo em servidor.
- **Interface Premium**: Design SaaS limpo, totalmente responsivo e com suporte perfeito a temas Claro/Escuro.
- **Feedback Visual**: Notificações Toast, barra de progresso e spinners para melhor experiência de uso.
- **Livre de Marcas d'Água**: Arquivos puros e prontos para uso em edições.

## 🛠️ Stack Tecnológica

- **Frontend**: HTML5, CSS3 Puro (Vanilla com variáveis CSS), JavaScript (Vanilla ES6+).
- **Backend**: Python 3 e Flask.
- **Core Engine**: `yt-dlp` (Motor de extração) e `FFmpeg` (Merge de fluxos).

## ⚙️ Como Executar Localmente

### Pré-requisitos
- **Python 3.9** ou superior.
- **FFmpeg** instalado e adicionado ao `PATH` do seu sistema (necessário para unir áudio e vídeo de alta resolução).

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/mateusj-basilio/baixar-video-yt.git
   cd baixar-video-yt
   ```

2. **Crie um ambiente virtual e ative-o:**
   ```bash
   python -m venv venv
   # No Windows:
   venv\Scripts\activate
   # No Linux/Mac:
   source venv/bin/activate
   ```

3. **Instale as dependências:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Inicie o servidor Flask:**
   ```bash
   python app.py
   ```

5. **Acesse no navegador:**
   Abra `http://localhost:5000`

## 📦 Arquitetura

- `index.html`: Interface do site público otimizada para SEO.
- `assets/css/style.css`: Design System estruturado sem frameworks.
- `assets/js/main.js`: Lógica de interface, toasts e chamadas AJAX.
- `app.py`: Servidor backend em Flask que expõe a API para o frontend.
- `script.py`: Core de download e retry configurado com `yt-dlp`.
