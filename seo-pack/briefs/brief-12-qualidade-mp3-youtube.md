# Brief — Ideia #12

**Página:** `/qualidade-mp3-youtube` (companion thin/high-trust da #02)  
**Produto:** BaixarVideoYT — https://baixarvideoyt.com.br/ (se DNS instável, usar host live no canônico)  
**Repo:** `C:\Mateus\python-programs\youtube-downloader` · `mateusj-basilio/baixar-video-yt`  
**Status no board:** idea → briefed  
**Idioma:** pt-BR  
**Depende de P0 técnico:** rotas Flask/Vercel + sitemap.

---

## 1. Objetivo

Explicar **128 vs 192 vs 320 kbps** de forma citável e direcionar ao download MP3 no BaixarVideoYT (sem inventar que o produto oferece todos os bitrates se oferecer só um).

**Job to be done:** “Qual qualidade de MP3 eu escolho / o que é 320 kbps?”

---

## 2. Para quem

- Quem viu “320 kbps” no site e quer entender  
- Ouvintes de podcast/música comparando tamanho vs qualidade  
- Usuários vindos da landing #02  

**Não é para:** engenharia de áudio avançada ou ABX tests inventados.

---

## 3. Termos-alvo (sementes — sem volume inventado)

- mp3 320kbps youtube  
- qualidade mp3 youtube  
- 128 ou 320 kbps  
- bitrate mp3 podcast  
- melhor qualidade mp3 youtube  

Secundários: mp3 192 kbps, baixar mp3 alta qualidade.

---

## 4. Relação com a home / #02

Companion de `/youtube-para-mp3`. Home card MP3 pode linkar “Entenda 320 kbps” → esta URL.

---

## 5. Spec da URL

| Campo | Valor |
|-------|--------|
| Path | `/qualidade-mp3-youtube` |
| Title | `Qualidade MP3 do YouTube: 128, 192 ou 320 kbps? \| BaixarVideoYT` |
| H1 | `Qual qualidade de MP3 escolher? (128 vs 192 vs 320 kbps)` |
| Meta description | `Entenda bitrate MP3 (128, 192, 320 kbps) ao baixar áudio do YouTube. Veja o que o BaixarVideoYT oferece e baixe grátis no navegador.` |
| Canonical | `https://baixarvideoyt.com.br/qualidade-mp3-youtube` (ou host live estável) |

---

## 6. Estrutura da página (ordem)

1. **Hero** — H1 + definição curta de bitrate  
2. **Tabela qualitativa** — 128 (menor arquivo) / 192 (meio) / 320 (alta) — **sem** inventar “sempre indistingível”  
3. **O que o BaixarVideoYT entrega** — declarar a taxa real do produto (ex.: até 320 kbps se for o caso); se só uma opção, dizer  
4. **Podcast vs música** — orientação prática  
5. **CTA** → `/youtube-para-mp3`  
6. **FAQ** + `FAQPage`  

### FAQ sugerido

1. O que significa MP3 320 kbps?  
2. 128 kbps é ruim?  
3. O BaixarVideoYT baixa em que qualidade?  
4. Arquivo 320 kbps fica muito grande?  
5. Bitrate alto recupera qualidade de um upload ruim?

(Resposta 5: não — o teto é a qualidade da fonte.)

---

## 7. AEO / GEO

- Definições curtas citáveis  
- Entity: **BaixarVideoYT**  
- Sem AggregateRating / “melhor qualidade do mercado”  

---

## 8. Implementação técnica

1. `qualidade-mp3-youtube.html`  
2. Flask route  
3. Sitemap + links #02/#10  

---

## 9. Claims

**Ok:** explicar bitrates; declarar o que o produto oferece; dependência da fonte.  
**Evitar:** volumes; “sempre 320”; scores de qualidade inventados.

---

## 10. Critério de pronto

- Tabela 128/192/320 clara  
- Transparência do bitrate do produto  
- CTA para MP3  
- Sitemap + rota 200  
- Sem métricas inventadas  

---

## 11. Próximo no board

Pack completo: IMPLEMENTACAO.md, robots, sitemap, app.py.patch, scaffolds, aplicar no Windows se possível.
