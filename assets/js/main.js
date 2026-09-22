document.addEventListener('DOMContentLoaded', () => {
    const formInfo = document.getElementById('info-form');
    const inputUrl = document.getElementById('url-input'); // Atualizado ID do input
    const btnSubmitInfo = document.getElementById('analyze-btn');
    const clearBtn = document.getElementById('clear-btn');
    
    // Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector('i') : null;
    const feedback = document.getElementById('parseFeedback');
    const feedbackText = feedback.querySelector('.pf-feedback__text');
    
    const previewSection = document.getElementById('preview-section');
    const previewImg = document.getElementById('preview-img');
    const previewTitle = document.getElementById('preview-title');
    const previewDesc = document.getElementById('preview-desc');
    
    const chips = document.querySelectorAll('.pf-chip');
    const dlTriggerBtns = document.querySelectorAll('.dl-trigger-btn');
    const actionsWrapper = document.getElementById('download-actions-wrapper');
    const progressArea = document.getElementById('progress-area');
    const progressPercent = document.getElementById('progress-percent');
    const progressFill = document.getElementById('progress-fill');
    
    const historySection = document.getElementById('history-section');
    const historyGrid = document.getElementById('history-grid');

    let currentMode = 'video';
    let currentUrl = '';
    let currentTitle = 'Vídeo';
    let currentThumbnail = '';
    let pollingInterval = null;

    // --- TOAST NOTIFICATIONS ---
    function showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = `pf-toast pf-toast--${type}`;
        
        const icon = type === 'success' ? '<i class="fa-solid fa-circle-check"></i>' : '<i class="fa-solid fa-circle-exclamation"></i>';
        toast.innerHTML = `${icon} <span>${message}</span>`;
        
        container.appendChild(toast);
        
        // Remover após 4 segundos
        setTimeout(() => {
            toast.classList.add('hiding');
            toast.addEventListener('animationend', () => {
                toast.remove();
            });
        }, 4000);
    }

    // --- DARK MODE LOGIC ---
    function initTheme() {
        const savedTheme = localStorage.getItem('pf_theme');
        
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if(themeIcon) { themeIcon.classList.replace('fa-moon', 'fa-sun'); }
        }
    }
    
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('pf_theme', 'light');
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('pf_theme', 'dark');
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            }
        });
    }
    initTheme();

    // --- CLEAR BUTTON LOGIC ---
    if (clearBtn && inputUrl) {
        inputUrl.addEventListener('input', () => {
            clearBtn.style.display = inputUrl.value.trim() ? 'flex' : 'none';
        });

        clearBtn.addEventListener('click', () => {
            inputUrl.value = '';
            clearBtn.style.display = 'none';
            inputUrl.focus();
        });
    }

    // Local Storage History
    function getHistory() {
        return JSON.parse(localStorage.getItem('pf_history') || '[]');
    }

    function saveToHistory(url, type, title, thumbnail) {
        const history = getHistory();
        history.unshift({ url, type, title, thumbnail, date: new Date().toLocaleTimeString() });
        localStorage.setItem('pf_history', JSON.stringify(history.slice(0, 10)));
        renderHistory();
    }

    function renderHistory() {
        const history = getHistory();
        if (history.length > 0) {
            historySection.style.display = 'block';
            historyGrid.innerHTML = history.map(item => `
                <div class="pf-card pf-flex pf-items-center pf-gap-md" style="padding: 1rem;">
                    <img src="${item.thumbnail || 'https://via.placeholder.com/120x68?text=Sem+Thumb'}" alt="Thumb" style="width: 100px; height: 56px; object-fit: cover; border-radius: 6px;">
                    <div style="flex: 1; min-width: 0;">
                        <h3 class="pf-card__title" title="${item.title || item.url}" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 0.25rem;">
                            ${item.title || item.url}
                        </h3>
                        <div class="pf-flex pf-justify-between pf-items-center">
                            <span class="pf-badge pf-badge--secondary" style="opacity: 0.85; padding: 0.15rem 0.5rem; font-size: 0.75rem;">
                                ${item.type.toUpperCase()}
                            </span>
                            <span style="font-size: 11px; color: var(--pf-on-surface-variant);">
                                ${item.date}
                            </span>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    renderHistory();

    // Passo 1: Obter Metadados (Preview)
    formInfo.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        currentUrl = inputUrl.value.trim();
        if (!currentUrl) return;

        // Validação Amigável de URL do YouTube
        const ytRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+$/;
        if (!ytRegex.test(currentUrl)) {
            previewSection.style.display = 'none';
            feedback.style.display = 'block';
            feedback.style.borderColor = 'var(--pf-primary-container)';
            feedbackText.textContent = '👋 Ops! Isso não parece ser um link válido do YouTube. Copie a URL do vídeo e tente novamente.';
            return;
        }

        // Reset UI
        previewSection.style.display = 'none';
        progressArea.style.display = 'none';
        actionsWrapper.style.display = 'block';
        
        // UX de Loading
        btnSubmitInfo.disabled = true;
        const originalBtnHTML = btnSubmitInfo.innerHTML;
        btnSubmitInfo.innerHTML = 'Analisando... <i class="fa-solid fa-spinner fa-spin pf-ml-sm"></i>';
        
        feedback.style.display = 'block';
        feedback.style.borderColor = 'var(--pf-surface-high)';
        feedbackText.textContent = 'Buscando informações do vídeo...';

        try {
            const response = await fetch('/api/info', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: currentUrl })
            });
            const resData = await response.json();

            if (response.ok && resData.status === 'success') {
                feedback.style.display = 'none';
                
                // Povoar o card de preview
                const data = resData.data;
                currentTitle = data.title;
                currentThumbnail = data.thumbnail || '';
                
                previewImg.src = currentThumbnail || 'https://via.placeholder.com/640x360?text=Sem+Thumbnail';
                previewTitle.textContent = currentTitle;
                previewDesc.textContent = data.description || 'Nenhuma descrição disponível.';
                
                // Mostrar Preview
                previewSection.style.display = 'block';
            } else {
                feedbackText.textContent = '❌ Erro: ' + (resData.message || 'Erro ao buscar vídeo');
                feedback.style.borderColor = 'var(--pf-primary-container)';
            }
        } catch (error) {
            feedbackText.textContent = '❌ Erro de rede. O servidor Flask está rodando?';
            feedback.style.borderColor = 'var(--pf-primary-container)';
            showToast('Erro de conexão com o servidor.', 'error');
        } finally {
            // Restore UX
            btnSubmitInfo.disabled = false;
            btnSubmitInfo.innerHTML = 'Analisar <i class="fa-solid fa-arrow-right pf-ml-sm" aria-hidden="true"></i>';
        }
    });

    // Passo 2: Iniciar Download e Fazer Polling do Progresso
    dlTriggerBtns.forEach(btn => {
        btn.addEventListener('click', async () => {
            if (!currentUrl) return;
            
            currentMode = btn.dataset.mode;
            
            // Hide buttons and show progress
            actionsWrapper.style.display = 'none';
            progressArea.style.display = 'block';
            progressFill.style.width = '0%';
            progressPercent.textContent = '0%';

            try {
                // Dispara thread no backend
                const response = await fetch('/api/start-download', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ url: currentUrl, type: currentMode })
                });
                const startData = await response.json();

                if (response.ok && startData.status === 'success') {
                    const taskId = startData.task_id;
                    
                    // Inicia o polling a cada 1 segundo
                    pollingInterval = setInterval(() => checkProgress(taskId), 1000);
                } else {
                    throw new Error(startData.message || "Falha ao iniciar download");
                }
            } catch (error) {
                showToast(error.message, 'error');
                resetDownloadUI();
            }
        });
    });

    // Passo 3: Consultar progresso
    async function checkProgress(taskId) {
        try {
            const response = await fetch(`/api/progress/${taskId}`);
            const data = await response.json();

            if (data.status === 'success') {
                const perc = data.progress.toFixed(1);
                progressFill.style.width = perc + '%';
                progressPercent.textContent = perc + '%';

                if (data.task_status === 'completed') {
                    clearInterval(pollingInterval);
                    finishDownload(taskId);
                } else if (data.task_status === 'error') {
                    clearInterval(pollingInterval);
                    showToast(data.error, 'error');
                    resetDownloadUI();
                }
            }
        } catch (e) {
            console.error("Erro no polling", e);
        }
    }

    // Passo 4: Concluir e puxar o arquivo
    function finishDownload(taskId) {
        progressPercent.textContent = 'Finalizado! Iniciando transferência...';
        progressFill.style.width = '100%';
        
        // Puxa o arquivo do backend forçando o attachment no navegador
        window.location.href = `/api/file/${taskId}`;
        
        saveToHistory(currentUrl, currentMode, currentTitle, currentThumbnail);
        
        setTimeout(() => {
            resetDownloadUI();
        }, 5000);
    }

    function resetDownloadUI() {
        progressArea.style.display = 'none';
        actionsWrapper.style.display = 'block';
    }

    // Clear History Action
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener('click', () => {
            localStorage.removeItem('pf_history');
            historySection.style.display = 'none';
            historyGrid.innerHTML = '';
        });
    }
});
