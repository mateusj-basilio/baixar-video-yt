# Brief — Ideia #03

**Página:** `/baixar-youtube-shorts` (landing dedicada)  
**Produto:** BaixarVideoYT — https://baixarvideoyt.com.br/ (se DNS instável, usar o host live no canônico até estabilizar)  
**Repo:** `C:\Mateus\python-programs\youtube-downloader` · `mateusj-basilio/baixar-video-yt`  
**Status no board:** idea → briefed  
**Idioma:** pt-BR  
**Depende de P0 técnico:** rotas estáticas no Flask/Vercel para HTML + servir sitemap; sem isso a URL nova não indexa bem.

---

## 1. Objetivo

Converter quem busca **baixar YouTube Shorts em MP4** (vertical, sem marca d’água) em um download no navegador, sem instalar app.

**Job to be done:** “Quero o arquivo do Short no celular/PC, em vertical, limpo, agora.”

---

## 2. Para quem

- Criadores que repostam Shorts → Reels/TikTok  
- Editores que precisam do arquivo 9:16 sem watermark  
- Usuários casuais que querem guardar um Short offline  

**Não é para:** tutorial de extensão/yt-dlp, nem incentivo a violar direitos autorais de terceiros.

---

## 3. Termos-alvo (sementes — sem volume inventado)

- baixar youtube shorts  
- baixar shorts youtube mp4  
- youtube shorts download  
- baixar shorts sem marca d'água  
- baixar short youtube online  

Secundários: shorts vertical mp4, baixar shorts no celular.

---

## 4. Relação com a home

A home já menciona Shorts no bloco de formatos. Esta landing **aprofunda** a intenção Shorts e aponta CTA para o mesmo input (ou home com âncora `#downloader`).

Na home, após publicar: no card Shorts, link “Saiba mais” → `/baixar-youtube-shorts`.

---

## 5. Spec da URL

| Campo | Valor |
|-------|--------|
| Path | `/baixar-youtube-shorts` |
| Title | `Baixar YouTube Shorts em MP4 Grátis (sem marca d'água) \| BaixarVideoYT` |
| H1 | `Baixar YouTube Shorts em MP4 grátis` |
| Meta description | `Baixe Shorts do YouTube em MP4 vertical, online e grátis. Sem cadastro, sem instalar e sem marca d'água. Cole o link do Short no BaixarVideoYT.` |
| Canonical | `https://baixarvideoyt.com.br/baixar-youtube-shorts` (ou host live estável) |

---

## 6. Estrutura da página (ordem)

1. **Hero** — H1 + 2 frases + CTA “Colar link do Short”  
2. **Como baixar em 3 passos** — abrir Short → compartilhar/copiar link → colar → Baixar MP4  
3. **Vertical 9:16** — explicar que o arquivo mantém o formato do Short (sem inventar resolução fixa)  
4. **Sem marca d’água** — claim só se o produto entregar arquivo limpo  
5. **Casos de uso** — repost, edição, arquivo pessoal (sem incentivar pirataria)  
6. **FAQ** (3–5) + `FAQPage` schema  
7. **CTA final** — voltar ao downloader  

### FAQ sugerido (perguntas)

1. Como baixar um YouTube Short em MP4 grátis?  
2. O arquivo sai em vertical (9:16)?  
3. O BaixarVideoYT coloca marca d’água no Short?  
4. Dá para baixar Shorts no celular?  
5. Preciso instalar app ou extensão?

Respostas: diretas na primeira frase; honestidade do FAQ da home (sem cadastro; arquivo no dispositivo).

---

## 7. AEO / GEO

- Primeira resposta de cada FAQ em 1–2 frases citáveis  
- Linha citável: “BaixarVideoYT baixa YouTube Shorts em MP4 no navegador, sem instalar e sem marca d’água.”  
- Entity: sempre **BaixarVideoYT**, nunca PulseFetch  
- Evitar ratings/AggregateRating inventados no JSON-LD  

---

## 8. Implementação técnica (para o agente de código)

1. Criar `baixar-youtube-shorts.html` reusando CSS/JS de `assets/`  
2. Em `app.py`:
   ```python
   @app.route('/baixar-youtube-shorts')
   def page_shorts():
       return send_file('baixar-youtube-shorts.html')
   ```
3. Garantir rotas SEO na raiz (robots/sitemap/llms) — ver patch-p0 + IMPLEMENTACAO.md  
4. Atualizar `sitemap.xml` com a nova `<url>`  
5. Link interno da home (card Shorts) → esta URL  
6. `og:title` / `og:url` / `og:image` (quando P1 de imagem estiver pronto)

---

## 9. Claims

**Ok:** grátis, sem cadastro, sem instalar, MP4, Shorts, sem marca d’água *se o produto entrega*, funciona no celular via navegador.  
**Evitar:** volumes, “melhor baixador de Shorts”, “sempre HD”, “ilimitado”, downloads de conteúdo pago sem autorização.

---

## 10. Critério de pronto

- Title/H1 falam “Shorts → MP4”  
- Usuário sabe em 5 segundos que é vertical, grátis, no browser  
- FAQ responde marca d’água + celular + sem instalar  
- Entrada no sitemap + rota 200  
- Nenhum número de SEO inventado  

---

## 11. Próximo no board

Brief #04 — Como baixar YouTube no celular (Android e iPhone) → `/baixar-youtube-no-celular`.
