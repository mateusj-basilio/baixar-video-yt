# IMPLEMENTAÇÃO — Pack SEO/AEO/GEO BaixarVideoYT

**Data do pack:** 22 set 2026 (America/Sao_Paulo)  
**Canônico preferido:** `https://baixarvideoyt.com.br/`  
**Host live verificado:** `https://baixar-video-yt.vercel.app/`  
**Regra:** não inventar volumes, dificuldade, posições, cliques, CTR ou citações.

Se o DNS `.com.br` estiver instável, use temporariamente o host Vercel em canonical, og:url, sitemap, robots Sitemap e llms — depois unifique no `.com.br`.

---

## P0 — fazer primeiro (bloqueadores)

| # | Ação | Onde | Artefato neste pack |
|---|------|------|---------------------|
| 1 | Servir `robots.txt`, `sitemap.xml`, `llms.txt` na raiz (hoje 404 no Vercel) | `app.py` e/ou `vercel.json` | `app.py.patch.md`, `vercel.json` |
| 2 | Corrigir `Sitemap:` PulseFetch → baixarvideoyt.com.br | `robots.txt` | `robots.txt` |
| 3 | Substituir `llms.txt` (marca BaixarVideoYT + URLs das landings) | raiz do projeto | `llms.txt` |
| 4 | Trocar H1 + subhead do hero | `index.html` | `index-h1-snippet.html`, `patch-p0.md` |
| 5 | Estabilizar DNS/HTTPS de `baixarvideoyt.com.br` **ou** canonical temporário no host live | DNS / Vercel / meta tags | (infra manual) |
| 6 | Publicar `sitemap.xml` com home + paths das landings | raiz | `sitemap.xml` |

Validação pós-deploy (substitua `<host>`):
- `https://<host>/robots.txt` → 200, Sitemap correto  
- `https://<host>/sitemap.xml` → 200  
- `https://<host>/llms.txt` → 200, texto BaixarVideoYT  
- Home: H1 alinhado à query MP4  

---

## P1 — landings e on-page

| # | Ação | Onde | Artefato |
|---|------|------|----------|
| 7 | Publicar landings #02–#04 (HTML scaffolds inclusos) | Flask routes + HTML | `*-landing.html`, `app.py.patch.md` |
| 8 | Aplicar briefs #05–#12 (criar HTML a partir dos briefs; scaffolds opcionais) | mesmo padrão | `brief-05` … `brief-12` |
| 9 | Links internos da home (cards MP3, Shorts, FAQ celular, etc.) → landings | `index.html` | briefs |
| 10 | Adicionar `og:image` (+ Twitter Card básico) | `index.html` + landings | asset manual (falta criar imagem) |
| 11 | Soften prova social “10M+” se não verificável | `index.html` | audit |
| 12 | Alinhar FAQ celular “galeria” vs Downloads/Arquivos | `index.html` | brief-04 / brief-06 |
| 13 | Organization JSON-LD draft (sem ratings) | `index.html` | `patch-p0.md` §6 |

---

## P2 — expansão e GEO

| # | Ação | Notas |
|---|------|-------|
| 14 | Completar HTML rico para #05–#12 (não doorway fino) | Usar outlines + FAQ dos briefs |
| 15 | FAQPage JSON-LD em cada landing (sem AggregateRating) | Ver scaffolds 02–04 |
| 16 | Atualizar `llms.txt` sempre que novas URLs forem live | Já listadas no `llms.txt` deste pack |
| 17 | Search Console / envio de sitemap | Manual; só após rotas 200 e domínio estável |
| 18 | Remover resíduos PulseFetch (`rg -ni pulsefetch`) | Preferir replace de arquivo inteiro |

---

## Ordem sugerida de aplicação no repo local

1. Copiar `robots.txt`, `sitemap.xml`, `llms.txt` para a raiz do projeto  
2. Patch `app.py` (rotas SEO + landings existentes) — ver `app.py.patch.md`  
3. Opcional: `vercel.json` para garantir estáticos na raiz no Vercel  
4. Patch H1/subhead em `index.html` (UTF-8)  
5. Copiar scaffolds `youtube-para-mp3.html`, `baixar-youtube-shorts.html`, `baixar-youtube-no-celular.html`  
6. Deploy Vercel  
7. Conferir 200 nos paths  
8. Só então apontar DNS `.com.br` de forma estável / unificar canônicos  

**Não commitar/push a partir do agente** salvo pedido explícito do usuário.

---

## Mapa path → brief → HTML

| Path | Brief | HTML scaffold neste pack? |
|------|-------|---------------------------|
| `/` (home H1) | brief-01 | `index-h1-snippet.html` |
| `/youtube-para-mp3` | brief-02 | sim |
| `/baixar-youtube-shorts` | brief-03 | sim |
| `/baixar-youtube-no-celular` | brief-04 | sim |
| `/baixar-youtube-seguro` | brief-05 | não — usar brief |
| `/onde-ficam-salvos-downloads-youtube` | brief-06 | não |
| `/mp4-ou-mp3-youtube` | brief-07 | não |
| `/baixar-playlist-youtube` | brief-08 | não |
| `/baixar-aulas-youtube` | brief-09 | não |
| `/baixar-podcast-youtube` | brief-10 | não |
| `/baixar-youtube-4k` | brief-11 | não |
| `/qualidade-mp3-youtube` | brief-12 | não |

---

## O que NÃO fazer

- Inventar métricas de SEO/AEO  
- Incluir AggregateRating / “10M+” sem fonte  
- Prometer “sempre 4K” / “sempre 320”  
- Deixar Sitemap apontando para pulsefetch.com  
- Assumir que arquivos na raiz do repo já estão live (hoje 404 sem rota)
