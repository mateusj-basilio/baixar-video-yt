# Auditoria SEO / AEO / GEO — BaixarVideoYT

**Data:** 22 set 2026 (America/Sao_Paulo)  
**Fontes verificadas:** HTML live em `https://baixar-video-yt.vercel.app/` (curl + WebFetch); repositório GitHub `mateusj-basilio/baixar-video-yt` (index.html, robots.txt, sitemap.xml, llms.txt, app.py, README.md); ideas board e brief #01 em `/workspace/baixarvideoyt/`.  
**Não verificado / omitido:** volumes de busca, dificuldade, posições, cliques, CTR, impressões, contagens de citação em IA.

**Nota de acesso local:** Shell com `machineId` Windows não está disponível neste executor (comando PowerShell cai no box Linux). Conteúdo de `index.html` / rotas foi cruzado com o HTML live (mesmo tamanho 30523 bytes do repo) e arquivos do GitHub.

---

## Resumo executivo — top 8 fixes (impacto × esforço)

| # | Fix | Prioridade | Impacto | Esforço |
|---|-----|------------|---------|--------|
| 1 | Servir `robots.txt`, `sitemap.xml` e `llms.txt` na raiz (hoje **404** no Vercel) e corrigir URLs PulseFetch | **P0** | Alto | Baixo |
| 2 | Estabilizar domínio canônico `baixarvideoyt.com.br` (DNS/hosting) **ou** temporariamente apontar canonical/og/sitemap para o host que responde | **P0** | Alto | Médio (infra) |
| 3 | Trocar H1 marketing → query de dinheiro (alinhado ao title / brief #01) | **P0** | Alto | Baixo |
| 4 | Substituir corpo de `llms.txt` (PulseFetch / pulsefetch.com → BaixarVideoYT / baixarvideoyt.com.br) | **P0** | Alto (GEO) | Baixo |
| 5 | Corrigir `Sitemap:` em `robots.txt` (ainda `https://pulsefetch.com/sitemap.xml`) | **P0** | Alto | Baixo |
| 6 | Adicionar `og:image` (+ Twitter Card básico) e alinhar FAQ “celular → galeria” vs “Downloads/Arquivos” | **P1** | Médio | Baixo |
| 7 | Soften / remover prova social **“10M+ Vídeos Convertidos”** se não houver métrica verificável; reforçar subhead do hero com “baixar vídeo YouTube MP4” | **P1** | Médio | Baixo |
| 8 | Expandir para landings (#02 MP3, #03 Shorts, #04 celular) com rotas Flask + sitemap — home não escala sozinha para todas as intenções do board | **P1/P2** | Alto (médio prazo) | Alto |

---

## SEO técnico

### Indexação e rotas
- **Live funcional observado:** `https://baixar-video-yt.vercel.app/` → HTTP 200, `content-type: text/html; charset=utf-8`, `content-length: 30523`, header `Server: Vercel`, HSTS presente.
- **`app.py`:** única rota de conteúdo HTML é `/` (`send_file('index.html')`). APIs: `/api/info`, `/api/start-download`, `/api/progress/<id>`, `/api/file/<id>`. `static_folder='assets'` — **não** expõe arquivos na raiz do projeto.
- **Consequência verificada no Vercel:**
  - `/robots.txt` → **404**
  - `/sitemap.xml` → **404**
  - `/llms.txt` → **404**
  - `/assets/css/style.css` → **200**
- Arquivos existem no repo, mas crawlers na URL live **não os veem**.

### Domínio `.com.br`
- Canonical, `og:url` e `WebSite.url` no HTML apontam para `https://baixarvideoyt.com.br/`.
- Neste ambiente: WebFetch retornou **500**; `curl` falhou com *Could not resolve host*; DNS A não resolveu. Em outro momento do mesmo dia um HEAD chegou a retornar 200 via Vercel — comportamento **instável / não confiável**.
- **Bloqueador:** se o canônico não resolve de forma estável, Google e IAs podem indexar o host Vercel enquanto o HTML “aponta” para um domínio quebrado → risco de sinais contraditórios e páginas órfãs.

### Canonical / robots meta
- `rel=canonical` → `https://baixarvideoyt.com.br/` (presente).
- `meta robots` → `index, follow` (ok).
- Sem `noindex` indesejado na home.

### Sitemap (repo)
```xml
<loc>https://baixarvideoyt.com.br/</loc>
<lastmod>2026-09-22</lastmod>
```
- Só a home — coerente enquanto não houver outras rotas de conteúdo.
- Inútil na prática enquanto o arquivo não for servido (404) e/ou o domínio canônico estiver indisponível.

### robots.txt (repo)
- `Allow: /` para `*`, OAI-SearchBot, PerplexityBot, Claude-SearchBot.
- `Disallow: /` para GPTBot, CCBot, Bytespider (escolha de GEO/banda — documentar intenção).
- **Bug de marca:** `Sitemap: https://pulsefetch.com/sitemap.xml`.

### Sinais de performance (apenas o observável — sem scores inventados)
- HTML ~30 KB na home; CSS/JS em `/assets/`.
- Fontes Google + Font Awesome CDN (terceiros no critical path).
- Imagem hero Unsplash remota (`fetchpriority="high"`) — dependência de terceiro.
- Não há report Lighthouse/CrUX nesta auditoria; **não** inventar notas.

### Outros gaps técnicos on-page
- Sem `twitter:` meta.
- Sem `og:image` (compartilhamento social sem preview).
- Classes CSS `pf-*` (legado visual) — não são strings de marca para o usuário, mas lembrete de rebrand incompleto no design system.

---

## SEO on-page

### Title / H1 / meta
| Elemento | Valor atual | Avaliação |
|----------|-------------|-----------|
| `lang` | `pt-BR` | Ok |
| Title | `Baixar Vídeo do YouTube em MP4 e MP3 Grátis \| BaixarVideoYT` | Alinhado à intenção money (MP4/MP3) |
| Meta description | Baixar vídeo YouTube online… MP4 Full HD + MP3… Sem anúncios e sem cadastro | Ok; reforça proposta |
| H1 | `Extraia Vídeos e Áudios em Segundos. Grátis.` | **Desalinhado** do title e da query “baixar vídeo youtube mp4” (já no brief #01) |
| Subhead | Cole o link… MP4 / MP3… | Bom, mas não abre com a frase de busca |

### Estrutura de headings (visível)
- **H2:** Título (preview JS — placeholder “Título”), Seus Downloads Recentes, O Padrão Ouro em Conversão, Formatos Sem Perda de Qualidade, Feito para criadores e entusiastas, Da URL ao download em 3 passos, Dúvidas Comuns.
- **H3:** Ultra Velocidade; 100% Seguro e Privado; Qualidade Máxima; YouTube Shorts; Vídeos em 4K e 1080p; Áudio MP3 320kbps; Estudantes/Editores/Podcasts; 3 passos.
- Placeholder H2 “Título” no card de preview (hidden até JS) — baixo risco se `display:none`, mas idealmente não usar H2 semântico para UI vazia.

### Conteúdo vs ideas board
| Ideia | Cobertura na home |
|-------|-------------------|
| #01 MP4 money | Title/meta sim; **H1 não**; CTA sim |
| #02 MP3 | Bloco + FAQ; sem landing dedicada |
| #03 Shorts | Card de feature; sem landing |
| #04 Celular | FAQ forte |
| #05 Seguro/sem vírus | FAQ + copy “sem adware”; sem página trust |
| #06 Onde salva | FAQ |
| #07 MP4 vs MP3 | FAQ |
| #08 Playlist | Mencionado na copy de formatos; sem how-to |
| #09 Estudantes | Bloco audiência |
| #10 Podcast MP3 | Bloco audiência |
| #11 4K/Full HD | Feature card |
| #12 Bitrate 128/192/320 | Só “320kbps” — sem comparação |

### Links internos
- Apenas `/` (logo) e `#faq`. Sem navegação para landings futuras.
- Espaço de anúncio no rodapé da FAQ (“Espaço para Anúncio 728x90”) — risco de UX/confiança se parecer fake download (tema sensível neste nicho).

### Imagens (amostra de alt)
- Hero Unsplash: `alt="Baixar vídeo do YouTube em alta qualidade"` — ok.
- Preview: `alt="Thumbnail do vídeo extraído"` — ok.

### Claims a tratar com cuidado
- **“10M+ Vídeos Convertidos”** — número de marketing **não verificado** nesta auditoria; risco E-E-A-T / confiança se falso.
- “milissegundos”, “100% Seguro”, “sem compressão destrutiva”, “sempre 4K” implícito via badge — preferir nuance já usada no FAQ (>2h pode demorar; qualidade depende da fonte).

---

## AEO (Answer Engine Optimization)

### FAQ (6 Q&As) — texto alinhado ao FAQPage schema
1. **Como baixar vídeo do YouTube direto no celular?**  
   Fluxo Compartilhar → Copiar link → colar → Analisar → baixar. Resposta diz que salva na **galeria** do celular — **parcialmente inconsistente** com a Q6 (Android Downloads / iPhone Arquivos).
2. **O BaixarVideoYT é totalmente gratuito e seguro?**  
   Resposta direta “Sim… 100% gratuito”; sem cadastro; sem malware/abas invasivas. Bom para PAA; evitar “100% seguro” absoluto se não houver auditoria.
3. **Como converter vídeo do YouTube para MP3 grátis?**  
   Passo a passo curto + botão “Baixar Áudio”. Citável.
4. **Existe algum limite…?**  
   Honesto (>2h pode demorar). Bom para AEO (resposta nuanceada).
5. **Qual a diferença entre MP4 e MP3…?**  
   Definição clara + casos de uso. Ideal para AI overview.
6. **Onde ficam salvos… iPhone ou Android?**  
   Downloads vs Arquivos — alta citabilidade.

### Qualidade AEO
- Perguntas em linguagem natural pt-BR (estilo People Also Ask): forte.
- Respostas começam com frase direta na maioria — manter.
- Lacunas PAA úteis ainda não FAQ: “Funciona com Shorts?”, “Precisa instalar extensão?”, “Baixar playlist?”, “É legal / só conteúdo próprio?”, “Qual bitrate do MP3?”.
- Schema `FAQPage` presente e sincronizado (ligeira diferença de redação iPhone entre HTML visível e JSON-LD — manter 1:1).

---

## GEO / visibilidade em IA

### `llms.txt` (repo — **não servido** no live)
Conteúdo atual ainda marca **PulseFetch** e URL **https://pulsefetch.com/**. Draft corrigido já existe em `/workspace/baixarvideoyt/deliverables/llms.txt`.

### Consistência de entidade
| Superfície | Marca |
|------------|-------|
| Title, H1 área, body, README, SoftwareApplication, WebSite | BaixarVideoYT |
| `llms.txt` | **PulseFetch** (erro) |
| `robots.txt` Sitemap | **pulsefetch.com** (erro) |
| Classes CSS `pf-*` | Legado PulseFetch (não visível como marca) |
| Domínio produto | baixarvideoyt.com.br (instável) vs vercel.app (live) |

IAs que lerem só o HTML tendem a citar **BaixarVideoYT**; as que lerem `llms.txt` (quando servido) citariam **PulseFetch** — conflito grave de entidade.

### Fatos citáveis (ok se verdadeiros no produto)
- Grátis, sem cadastro, sem instalar, sem marca d’água.
- MP4 e MP3; Shorts e playlists mencionados.
- MP3 até 320 kbps; Full HD/4K quando a fonte permitir (recomendado explicitar “quando disponível”).
- Fluxo em 3 passos; caminhos Android/iOS.

### Citation-worthiness — melhorar
- Remover/justificar “10M+".
- Adicionar Organization (draft) com `url`, `name`, `sameAs` (GitHub) — **sem** `aggregateRating` falso.
- Servir `llms.txt` corrigido.
- Páginas how-to estáveis (URLs próprias) aumentam chance de citação vs SPA de uma página só.

---

## Consistência de marca e domínio

| Host | Estado observado nesta auditoria |
|------|----------------------------------|
| `baixar-video-yt.vercel.app` | 200, conteúdo BaixarVideoYT |
| `baixarvideoyt.com.br` | DNS/resolve falhou aqui; WebFetch 500; canônico aponta para cá |

**Recomendação operacional:**
1. Garantir DNS + deploy do `.com.br` no mesmo projeto Vercel (ou redirect 301 estável **para** o canônico escolhido).
2. Até o `.com.br` estar green de ponta a ponta, crawlers no Vercel verão canonical “externo” quebrado — priorizar infra **antes** de investir em landings.
3. Unificar todas as menções de URL (og, WebSite, sitemap, llms, robots) no **mesmo** host canônico.

README: marca correta **BaixarVideoYT**; sem PulseFetch.

---

## Mapa: o que fica na home vs páginas novas

### Permanecer / reforçar na home (`/`)
- Downloader (hero + input) — acima da dobra.
- H1 + subhead alinhados a **baixar vídeo YouTube MP4** (+ MP3 como secundário).
- Prova rápida: grátis / sem instalar / sem marca d’água (sem métricas inventadas).
- 3 passos, features curtas, formatos (com **links internos** futuros).
- FAQ geral + FAQPage (celular, seguro, MP3, limite, MP4 vs MP3, onde salva).
- Schema SoftwareApplication + WebSite (+ Organization draft).

### Extrair para URLs novas (ideas board) — quando `app.py` tiver rotas de conteúdo
| Rota sugerida | Ideia | Notas |
|---------------|-------|-------|
| `/youtube-para-mp3` ou `/baixar-mp3-youtube` | #02 | Money #2 |
| `/baixar-youtube-shorts` | #03 | Vertical / Reels |
| `/baixar-youtube-no-celular` | #04 | How-to trust |
| `/baixar-youtube-seguro` | #05 | Trust / anti-adware |
| `/onde-ficam-salvos-downloads` | #06 | Pode ser âncora FAQ se thin |
| `/mp4-ou-mp3` | #07 | Mid-funnel |
| `/baixar-playlist-youtube` | #08 | Feature; honestidade de limites |
| `/baixar-aula-youtube-offline` | #09 | Use case; evitar pirataria |
| `/baixar-podcast-youtube-mp3` | #10 | → CTA MP3 |
| `/baixar-youtube-4k` | #11 | Qualidade; “se a fonte tiver” |
| (seção ou FAQ) bitrate | #12 | Companion de #02 |

Sitemap: só home até existirem rotas; depois listar cada URL indexável.

---

## Checklist de implementação

### P0 (fazer agora)
- [ ] Corrigir DNS/hosting de `baixarvideoyt.com.br` **ou** mudar canonical/og/WebSite/sitemap temporariamente para o host live estável.
- [ ] Expor na raiz: `robots.txt`, `sitemap.xml`, `llms.txt` (rotas Flask `send_file` **ou** `vercel.json`/static routes — o que o deploy usar).
- [ ] `robots.txt`: `Sitemap: https://baixarvideoyt.com.br/sitemap.xml` (domínio canônico final).
- [ ] Substituir `llms.txt` pelo draft BaixarVideoYT (ver `patch-p0.md`).
- [ ] Trocar H1 para o do brief #01 (ver `patch-p0.md`).
- [ ] Ajustar subhead do hero para espelhar “baixar… MP4… sem instalar”.
- [ ] Find-replace PulseFetch/pulsefetch.com em arquivos de deploy (lista no patch).

### P1
- [ ] `og:image` + `twitter:card` / `twitter:title` / `twitter:description`.
- [ ] Harmonizar FAQ celular (galeria vs Downloads/Arquivos) no HTML **e** no JSON-LD.
- [ ] Remover ou qualificar “10M+”; revisar “Padrão Ouro” / superlativos.
- [ ] Schema Organization (draft, sem ratings).
- [ ] Brief + landing #02 (MP3) e link interno a partir do card MP3.
- [ ] Confirmar GSC/Bing no domínio canônico + enviar sitemap (após 200 estável).

### P2
- [ ] Landings #03 Shorts, #04 celular, #05 seguro; depois playlist/4K/audiências.
- [ ] Renomear classes `pf-*` → prefixo da marca (cosmético / dívida técnica).
- [ ] Avaliar política GPTBot/CCBot vs descoberta em produtos OpenAI/outros (trade-off consciente).
- [ ] Reduzir dependência Unsplash no LCP (imagem self-hosted otimizada).

---

## Apêndice — inventário técnico extraído

### Meta / social (live = repo)
- Canonical: `https://baixarvideoyt.com.br/`
- OG: type, url, title, description — **sem** image
- Twitter: **ausente**

### JSON-LD (3 blocos)
1. `SoftwareApplication` — name BaixarVideoYT, price 0 BRL, UtilitiesApplication  
2. `WebSite` — url baixarvideoyt.com.br  
3. `FAQPage` — 6 perguntas (textos acima)

### PulseFetch fora de `llms.txt`?
- **Sim:** `robots.txt` linha `Sitemap: https://pulsefetch.com/sitemap.xml`
- **Não** em `index.html` (zero ocorrências da string), `app.py`, `README.md`, `sitemap.xml`
- Legado: prefixo CSS/JS `pf-` (não é string de marca exibida)

### Bloqueadores
1. Domínio canônico `.com.br` instável / DNS falhando neste check.  
2. Arquivos SEO na raiz **não servidos** (404 no Vercel) por `app.py` só mapear `/` + `assets/`.  
3. Entidade PulseFetch ainda em `llms.txt` + sitemap URL do robots.  
4. Acesso Shell ao path Windows (`machineId`) indisponível neste agente — mitigado via live + GitHub.
