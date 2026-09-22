# Brief — Ideia #11

**Página:** `/baixar-youtube-4k` (landing de qualidade)  
**Produto:** BaixarVideoYT — https://baixarvideoyt.com.br/ (se DNS instável, usar host live no canônico)  
**Repo:** `C:\Mateus\python-programs\youtube-downloader` · `mateusj-basilio/baixar-video-yt`  
**Status no board:** idea → briefed  
**Idioma:** pt-BR  
**Depende de P0 técnico:** rotas Flask/Vercel + sitemap.

---

## 1. Objetivo

Converter criadores/editores que buscam **YouTube em 4K ou Full HD** no download MP4, com honestidade: resolução máxima depende da fonte.

**Job to be done:** “Quero o arquivo na maior qualidade disponível desse vídeo.”

---

## 2. Para quem

- Editores e criadores  
- Quem arquiva clipes em alta resolução  
- Usuários frustrados com compressão de reupload  

**Não é para:** upscale mágico (não inventar IA que “cria 4K”).

---

## 3. Termos-alvo (sementes — sem volume inventado)

- baixar youtube 4k  
- baixar youtube 1080p  
- youtube full hd download  
- baixar youtube alta qualidade  
- baixar youtube 4k grátis  

Secundários: baixar youtube sem perder qualidade, mp4 4k youtube.

---

## 4. Relação com a home

Home já fala 4K/Full HD. Landing explica **dependência da fonte** + CTA.

---

## 5. Spec da URL

| Campo | Valor |
|-------|--------|
| Path | `/baixar-youtube-4k` |
| Title | `Baixar YouTube em 4K ou Full HD (quando a fonte permitir) \| BaixarVideoYT` |
| H1 | `Baixar YouTube em 4K ou Full HD` |
| Meta description | `Baixe vídeos do YouTube em Full HD ou 4K quando o vídeo fonte tiver essa qualidade. Grátis, no navegador — BaixarVideoYT.` |
| Canonical | `https://baixarvideoyt.com.br/baixar-youtube-4k` (ou host live estável) |

---

## 6. Estrutura da página (ordem)

1. **Hero** — H1 + disclaimer de fonte  
2. **O que “4K” significa aqui** — só se o upload original oferecer  
3. **Full HD (1080p)** — caso mais comum  
4. **Como escolher qualidade no fluxo** — alinhar à UI real  
5. **FAQ** + `FAQPage`  
6. **CTA**  

### FAQ sugerido

1. Consigo sempre baixar em 4K?  
2. O que acontece se o vídeo só tiver 720p?  
3. Baixar em 4K deixa o arquivo maior?  
4. Tem marca d’água na versão HD?  
5. Funciona com Shorts em alta qualidade?

(Espaço/tamanho: qualitativo — resoluções maiores geram arquivos maiores; sem MB inventados.)

---

## 7. AEO / GEO

- Frase citável com a condição “quando a fonte permitir”  
- Entity: **BaixarVideoYT**  
- Sem ratings / “sempre 4K”  

---

## 8. Implementação técnica

1. `baixar-youtube-4k.html`  
2. Flask route  
3. Sitemap + link do bloco 4K na home  

---

## 9. Claims

**Ok:** até 4K/Full HD *quando disponível na fonte*; sem marca d’água se verdadeiro.  
**Evitar:** “sempre 4K”; upscale; volumes.

---

## 10. Critério de pronto

- Disclaimer de fonte visível  
- FAQ responde “sempre 4K?” com não  
- Sitemap + rota 200  

---

## 11. Próximo no board

Brief #12 — Qualidade MP3 / bitrate → `/qualidade-mp3-youtube`.
