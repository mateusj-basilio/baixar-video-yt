# Brief — Ideia #07

**Página:** `/mp4-ou-mp3-youtube` (landing mid-funnel)  
**Produto:** BaixarVideoYT — https://baixarvideoyt.com.br/ (se DNS instável, usar host live no canônico)  
**Repo:** `C:\Mateus\python-programs\youtube-downloader` · `mateusj-basilio/baixar-video-yt`  
**Status no board:** idea → briefed  
**Idioma:** pt-BR  
**Depende de P0 técnico:** rotas Flask/Vercel + sitemap.

---

## 1. Objetivo

Ajudar quem está **travado no seletor de formato** a escolher MP4 (vídeo+áudio) ou MP3 (só áudio) e concluir o download.

**Job to be done:** “Não sei se baixo em MP4 ou MP3 — me diga quando usar cada um.”

---

## 2. Para quem

- Primeira vez no conversor  
- Estudantes / ouvintes indecisos  
- Criadores que precisam de vídeo vs só trilha  

**Não é para:** codec avançado (AAC, Opus) ou guia FFmpeg.

---

## 3. Termos-alvo (sementes — sem volume inventado)

- diferença mp4 mp3 youtube  
- baixar youtube mp4 ou mp3  
- quando usar mp3  
- quando usar mp4  
- youtube mp4 vs mp3  

Secundários: baixar só áudio youtube, baixar vídeo com áudio.

---

## 4. Relação com a home

Home FAQ já explica diferença. Landing **tabela + casos** e links para `/youtube-para-mp3` e home MP4.

---

## 5. Spec da URL

| Campo | Valor |
|-------|--------|
| Path | `/mp4-ou-mp3-youtube` |
| Title | `MP4 ou MP3 no YouTube: qual formato escolher? \| BaixarVideoYT` |
| H1 | `MP4 ou MP3: qual formato escolher ao baixar do YouTube?` |
| Meta description | `MP4 = vídeo com áudio; MP3 = só áudio. Veja quando usar cada um e baixe grátis no BaixarVideoYT, no navegador, sem instalar.` |
| Canonical | `https://baixarvideoyt.com.br/mp4-ou-mp3-youtube` (ou host live estável) |

---

## 6. Estrutura da página (ordem)

1. **Hero** — H1 + resumo em 1 frase  
2. **Tabela comparativa** — MP4 vs MP3 (uso, tamanho relativo qualitativo, player)  
3. **Escolha rápida** — se quer ver → MP4; se quer ouvir → MP3  
4. **Links** — CTA MP4 (home) / CTA MP3 (`/youtube-para-mp3`)  
5. **FAQ** + `FAQPage`  
6. **CTA final**  

### FAQ sugerido

1. Qual a diferença entre MP4 e MP3 no YouTube?  
2. O MP4 já inclui o áudio?  
3. Quando escolher MP3 320 kbps?  
4. Posso converter o mesmo link nos dois formatos?  
5. Qual ocupa menos espaço?

(Resposta de espaço: qualitativa — MP3 costuma ser menor; sem números inventados de MB.)

---

## 7. AEO / GEO

- Definição em 1–2 frases no topo  
- Entity: **BaixarVideoYT**  
- Sem AggregateRating  

---

## 8. Implementação técnica

1. `mp4-ou-mp3-youtube.html`  
2. Flask `/mp4-ou-mp3-youtube`  
3. Sitemap + links cruzados com #02  

---

## 9. Claims

**Ok:** MP4 = vídeo+áudio; MP3 = áudio; grátis no browser.  
**Evitar:** bitrates inventados além do que o produto oferece; volumes; “sempre melhor qualidade”.

---

## 10. Critério de pronto

- Tabela clara  
- CTAs para ambos formatos  
- FAQ responde “inclui áudio?”  
- Sitemap + rota 200  

---

## 11. Próximo no board

Brief #08 — Playlist → `/baixar-playlist-youtube`.
