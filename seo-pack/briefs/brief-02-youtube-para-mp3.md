# Brief — Ideia #02

**Página:** `/youtube-para-mp3` (landing dedicada) + reforço do bloco/FAQ MP3 na home  
**Produto:** BaixarVideoYT — https://baixarvideoyt.com.br/ (se DNS instável, usar o host live no canônico até estabilizar)  
**Repo:** `C:\Mateus\python-programs\youtube-downloader` · `mateusj-basilio/baixar-video-yt`  
**Status no board:** idea → briefed  
**Idioma:** pt-BR  
**Depende de P0 técnico:** rotas estáticas no Flask/Vercel para HTML + servir sitemap; sem isso a URL nova não indexa bem.

---

## 1. Objetivo

Converter quem busca **converter / baixar YouTube em MP3** (música, podcast, aula falada) em um download de áudio no navegador, sem instalar app.

**Job to be done:** “Quero só o áudio desse vídeo do YouTube, em MP3, agora.”

---

## 2. Para quem

- Quem baixa música ou setlist a partir de clipes  
- Ouvintes de podcast/videocast no carro, academia, offline  
- Estudantes que preferem ouvir a aula sem o vídeo  

**Não é para:** ripar curso pago, nem tutorial de linha de comando (yt-dlp).

---

## 3. Termos-alvo (sementes — sem volume inventado)

- youtube mp3  
- converter youtube para mp3  
- baixar mp3 youtube  
- youtube para mp3 grátis  
- baixar música youtube mp3  

Secundários: mp3 320kbps, baixar áudio youtube, videocast mp3.

---

## 4. Relação com a home

A home já tem bloco “Áudio MP3 320kbps” + FAQ “Como converter… MP3”. Esta landing **aprofunda** a intenção só-áudio e aponta CTA para o mesmo input (ou para a home com âncora no downloader).

Na home, após publicar: no card MP3, link “Saiba mais” → `/youtube-para-mp3`.

---

## 5. Spec da URL

| Campo | Valor |
|-------|--------|
| Path | `/youtube-para-mp3` |
| Title | `Converter YouTube para MP3 Grátis (até 320 kbps) \| BaixarVideoYT` |
| H1 | `Converter YouTube para MP3 grátis` |
| Meta description | `Baixe o áudio de qualquer link do YouTube em MP3, online e grátis. Até 320 kbps, sem cadastro e sem instalar. Cole o link no BaixarVideoYT.` |
| Canonical | `https://baixarvideoyt.com.br/youtube-para-mp3` (ou host live estável) |

---

## 6. Estrutura da página (ordem)

1. **Hero** — H1 + 2 frases + CTA “Colar link” (mesmo fluxo da home; se a landing for HTML estático, link para `/?focus=mp3` ou `#downloader` na home)  
2. **Como converter em 3 passos** — copiar URL → colar → Baixar áudio / MP3  
3. **MP3 vs MP4** — tabela curta (quando usar cada um) — alinha ideia #07  
4. **Qualidade** — explicar 320 kbps como opção de alta qualidade; **não** inventar “sempre 320”; se o produto oferece só uma taxa, dizer qual é  
5. **Casos de uso** — podcast, música, aula falada (sem incentivar pirataria)  
6. **FAQ** (3–5 perguntas) + `FAQPage` schema  
7. **CTA final** — voltar ao downloader  

### FAQ sugerido (perguntas)

1. Como converter vídeo do YouTube para MP3 grátis?  
2. O MP3 inclui a música com a melhor qualidade possível?  
3. Posso baixar só o áudio no celular?  
4. Qual a diferença entre baixar MP3 e MP4?  
5. O BaixarVideoYT guarda o meu arquivo de áudio?

Respostas: diretas na primeira frase; espelhar honestidade do FAQ da home (sem cadastro; arquivo vai ao dispositivo; vídeos longos podem demorar).

---

## 7. AEO / GEO

- Primeira resposta de cada FAQ em 1–2 frases citáveis  
- Incluir na página (e depois no `llms.txt`) a linha: “BaixarVideoYT converte links do YouTube em arquivos MP3 no navegador, sem instalar.”  
- Entity: sempre **BaixarVideoYT**, nunca PulseFetch  
- Evitar ratings/AggregateRating inventados no JSON-LD  

---

## 8. Implementação técnica (para o agente de código)

1. Criar `youtube-para-mp3.html` (ou template) reusando CSS/JS de `assets/`  
2. Em `app.py`:
   ```python
   @app.route('/youtube-para-mp3')
   def page_youtube_mp3():
       return send_file('youtube-para-mp3.html')
   ```
3. No Vercel: garantir que a rota e os estáticos de SEO na raiz (`robots.txt`, `sitemap.xml`, `llms.txt`) sejam servidos (hoje 404) — ver audit + patch-p0  
4. Atualizar `sitemap.xml` com a nova `<url>`  
5. Link interno da home (card MP3) → esta URL  
6. `og:title` / `og:url` / `og:image` (quando P1 de imagem estiver pronto)

---

## 9. Claims

**Ok:** grátis, sem cadastro, sem instalar, MP3, até 320 kbps *se o produto entrega isso*, funciona no celular via navegador.  
**Evitar:** volumes, “melhor conversor”, “sempre 320”, “ilimitado”, downloads de conteúdo pago sem autorização.

---

## 10. Critério de pronto

- Title/H1 falam “YouTube → MP3”  
- Usuário sabe em 5 segundos que é só áudio, grátis, no browser  
- FAQ responde celular + diferença MP4  
- Entrada no sitemap + rota 200  
- Nenhum número de SEO inventado  

---

## 11. Próximo no board

Brief #03 — Baixar YouTube Shorts em MP4 (vertical, sem marca d’água) → path sugerido `/baixar-youtube-shorts`.
