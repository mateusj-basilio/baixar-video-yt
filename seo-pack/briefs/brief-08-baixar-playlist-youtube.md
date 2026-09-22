# Brief — Ideia #08

**Página:** `/baixar-playlist-youtube` (landing de feature)  
**Produto:** BaixarVideoYT — https://baixarvideoyt.com.br/ (se DNS instável, usar host live no canônico)  
**Repo:** `C:\Mateus\python-programs\youtube-downloader` · `mateusj-basilio/baixar-video-yt`  
**Status no board:** idea → briefed  
**Idioma:** pt-BR  
**Depende de P0 técnico:** rotas Flask/Vercel + sitemap.

---

## 1. Objetivo

Converter quem busca **baixar playlist do YouTube** (MP4 ou MP3) no fluxo do produto, com honestidade sobre limites reais (ex.: um a um se for o caso).

**Job to be done:** “Tenho o link da playlist e quero os arquivos offline.”

---

## 2. Para quem

- Power users com playlists longas  
- Quem quer setlist em MP3  
- Estudantes com lista de aulas  

**Não é para:** ripar cursos pagos / playlists privadas sem autorização.

---

## 3. Termos-alvo (sementes — sem volume inventado)

- baixar playlist youtube  
- baixar playlist youtube mp3  
- baixar playlist youtube mp4  
- download playlist youtube  
- baixar lista de reprodução youtube  

Secundários: baixar vários vídeos youtube, playlist offline.

---

## 4. Relação com a home

Home menciona “Shorts e Playlists”. Landing explica **como colar o link da playlist** e limitações honestas.

---

## 5. Spec da URL

| Campo | Valor |
|-------|--------|
| Path | `/baixar-playlist-youtube` |
| Title | `Baixar Playlist do YouTube em MP4 ou MP3 \| BaixarVideoYT` |
| H1 | `Baixar playlist do YouTube em MP4 ou MP3` |
| Meta description | `Cole o link da playlist do YouTube e baixe em MP4 ou MP3 no navegador. Grátis, sem cadastro e sem instalar — BaixarVideoYT.` |
| Canonical | `https://baixarvideoyt.com.br/baixar-playlist-youtube` (ou host live estável) |

---

## 6. Estrutura da página (ordem)

1. **Hero** — H1 + CTA  
2. **Como obter o link da playlist**  
3. **MP4 vs MP3 na playlist** — link #07  
4. **Limites honestos** — se o produto processa item a item, dizer; **não** inventar “1000 vídeos de uma vez”  
5. **FAQ** + `FAQPage`  
6. **CTA final**  

### FAQ sugerido

1. Como baixar uma playlist do YouTube?  
2. Consigo baixar a playlist inteira de uma vez?  
3. Posso baixar a playlist só em MP3?  
4. Playlists privadas funcionam?  
5. Há limite de quantos vídeos?

(Responder limites só com o que o produto realmente faz.)

---

## 7. AEO / GEO

- Frase citável com o fluxo real  
- Entity: **BaixarVideoYT**  
- Sem ratings  

---

## 8. Implementação técnica

1. `baixar-playlist-youtube.html`  
2. Flask route  
3. Sitemap + link do card Playlists na home  

---

## 9. Claims

**Ok:** suporte a playlists *se o produto tem*; grátis; browser.  
**Evitar:** capacidade de lote inventada; volumes; pirataria de conteúdo pago.

---

## 10. Critério de pronto

- Limites honestos visíveis  
- FAQ cobre MP3/MP4 e privadas  
- Sitemap + rota 200  

---

## 11. Próximo no board

Brief #09 — Aulas offline → `/baixar-aulas-youtube`.
