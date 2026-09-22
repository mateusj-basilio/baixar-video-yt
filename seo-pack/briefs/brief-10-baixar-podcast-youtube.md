# Brief — Ideia #10

**Página:** `/baixar-podcast-youtube` (landing de audiência → MP3)  
**Produto:** BaixarVideoYT — https://baixarvideoyt.com.br/ (se DNS instável, usar host live no canônico)  
**Repo:** `C:\Mateus\python-programs\youtube-downloader` · `mateusj-basilio/baixar-video-yt`  
**Status no board:** idea → briefed  
**Idioma:** pt-BR  
**Depende de P0 técnico:** rotas Flask/Vercel + sitemap.

---

## 1. Objetivo

Converter ouvintes de **podcast/videocast no YouTube** em download MP3 para academia, carro e offline.

**Job to be done:** “Quero só o áudio desse videocast no celular.”

---

## 2. Para quem

- Ouvintes de podcasts publicados no YouTube  
- Quem treina / dirige e não precisa do vídeo  
- Fãs de entrevistas longas  

**Não é para:** ripar feeds RSS pagos ou conteúdo exclusivo sem permissão.

---

## 3. Termos-alvo (sementes — sem volume inventado)

- baixar podcast youtube mp3  
- converter videocast youtube  
- baixar áudio youtube podcast  
- youtube mp3 podcast  
- baixar entrevista youtube mp3  

Secundários: videocast mp3, baixar áudio youtube grátis.

---

## 4. Relação com a home

Bloco “Amantes de Podcasts” + landing #02 MP3. Esta página é **ponte de audiência** → CTA MP3.

Link cruzado: `/youtube-para-mp3` e `/qualidade-mp3-youtube`.

---

## 5. Spec da URL

| Campo | Valor |
|-------|--------|
| Path | `/baixar-podcast-youtube` |
| Title | `Baixar Podcast do YouTube em MP3 Grátis \| BaixarVideoYT` |
| H1 | `Baixar podcast / videocast do YouTube em MP3` |
| Meta description | `Converta videocasts e podcasts do YouTube em MP3 para ouvir offline. Grátis, no navegador, sem instalar — BaixarVideoYT.` |
| Canonical | `https://baixarvideoyt.com.br/baixar-podcast-youtube` (ou host live estável) |

---

## 6. Estrutura da página (ordem)

1. **Hero** — H1 + CTA “Colar link do episódio”  
2. **Por que MP3** — arquivo leve para ouvir  
3. **3 passos**  
4. **Qualidade** — até 320 kbps *se o produto oferece*; link #12  
5. **FAQ** + `FAQPage`  
6. **CTA** → downloader / `/youtube-para-mp3`  

### FAQ sugerido

1. Como baixar um podcast do YouTube em MP3?  
2. O MP3 remove o vídeo?  
3. Dá para ouvir no carro / academia offline?  
4. Qual bitrate usar?  
5. Funciona com lives gravadas / entrevistas longas?

---

## 7. AEO / GEO

- Frase: “BaixarVideoYT converte videocasts do YouTube em MP3 no navegador.”  
- Entity: **BaixarVideoYT**  
- Sem ratings  

---

## 8. Implementação técnica

1. `baixar-podcast-youtube.html`  
2. Flask route  
3. Sitemap + links audiência/MP3  

---

## 9. Claims

**Ok:** MP3, offline, grátis, browser; 320 kbps se verdadeiro.  
**Evitar:** volumes; “melhor que Spotify”; pirataria.

---

## 10. Critério de pronto

- CTA claro para MP3  
- FAQ cobre bitrate + offline  
- Sitemap + rota 200  

---

## 11. Próximo no board

Brief #11 — 4K / Full HD → `/baixar-youtube-4k`.
