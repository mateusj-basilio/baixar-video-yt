# Patch P0 — snippets prontos para colar (BaixarVideoYT)

**Escopo:** apenas P0. Aplicar no projeto local / repo; **não** foi feito push nem escrita no path Windows.  
**Canônico alvo:** `https://baixarvideoyt.com.br/` — só mantenha se o domínio estiver estável (DNS + HTTPS 200). Se não estiver, use temporariamente `https://baixar-video-yt.vercel.app/` em canonical, og:url, WebSite, sitemap e llms até o `.com.br` subir.

---

## 1. Novo H1 (substituir o atual)

**Atual:**
```html
<h1 class="pf-hero__title">
    Extraia Vídeos e Áudios em Segundos. Grátis.
</h1>
```

**Novo:**
```html
<h1 class="pf-hero__title">
    Baixar vídeo do YouTube em MP4 grátis (online, sem instalar)
</h1>
```

### Subhead sugerido (opcional P0, recomendado no mesmo PR)

**Atual (resumo):** “Cole o link abaixo para baixar em MP4…”

**Sugestão:**
```html
<p class="pf-hero__subtitle">
    Cole o link do YouTube e baixe em MP4 (Full HD ou 4K quando o vídeo fonte permitir) ou MP3 (até 320 kbps). Funciona no navegador — sem cadastro, sem instalar app e sem marcas d'água.
</p>
```

---

## 2. Meta description

A atual já cobre MP4/MP3/grátis/sem cadastro. **Manter**, salvo se quiser ênfase “sem instalar”:

```html
<meta name="description" content="Baixar vídeo do YouTube online, rápido e grátis. Use o BaixarVideoYT para converter vídeos em MP4 (Full HD) e áudios em MP3 (Alta Qualidade). Sem anúncios, sem cadastro e sem instalar.">
```

Title: **manter**  
`Baixar Vídeo do YouTube em MP4 e MP3 Grátis | BaixarVideoYT`

---

## 3. `llms.txt` — corpo completo corrigido

Substituir o arquivo inteiro por:

```text
# BaixarVideoYT

> Ferramenta web gratuita para baixar vídeos e áudios do YouTube em MP4 ou MP3, direto no navegador, sem instalar app e sem marcas d'água.

## Resumo
BaixarVideoYT permite colar um link do YouTube e baixar o arquivo em MP4 (até Full HD / 4K quando o vídeo fonte permitir) ou MP3 (até 320 kbps), inclusive Shorts e playlists. O processamento usa servidores próprios; o arquivo vai para a pasta de downloads do dispositivo do usuário. Não exige cadastro.

## Para quem é
- Criadores e editores que precisam de clipes em alta resolução
- Estudantes e pesquisadores que querem aulas e tutoriais offline
- Ouvintes de podcasts e videocasts que preferem MP3 leve

## Diferenciais
- Gratuito, sem cadastro
- Foco em velocidade e privacidade (sem adware invasivo)
- Sem marcas d'água no arquivo
- Funciona no navegador (desktop e celular)

## Como usar
1. Copie a URL do YouTube
2. Cole em https://baixarvideoyt.com.br/
3. Escolha MP4 (vídeo) ou MP3 (áudio) e salve

## Site
- Home: https://baixarvideoyt.com.br/
- Nome do produto: BaixarVideoYT
```

(Fonte: `/workspace/baixarvideoyt/deliverables/llms.txt`.)

---

## 4. Find-replace — PulseFetch → BaixarVideoYT

| Arquivo | Buscar | Substituir por |
|---------|--------|----------------|
| `llms.txt` | `# PulseFetch - Otimizado para IA` | `# BaixarVideoYT` (preferir substituir o arquivo inteiro — §3) |
| `llms.txt` | `PulseFetch` (todas) | `BaixarVideoYT` |
| `llms.txt` | `https://pulsefetch.com/` | `https://baixarvideoyt.com.br/` |
| `robots.txt` | `Sitemap: https://pulsefetch.com/sitemap.xml` | `Sitemap: https://baixarvideoyt.com.br/sitemap.xml` |

**Verificado sem string PulseFetch/pulsefetch:** `index.html`, `app.py`, `README.md`, `sitemap.xml`.  
**Não é string de marca (opcional, não P0):** classes/variáveis `pf-*` no CSS/HTML/JS.

Checklist pós-replace:
```bash
rg -ni "pulsefetch|pulse\.fetch" .
```
Esperado: zero hits (exceto histórico git).

---

## 5. Servir arquivos na raiz (obrigatório — hoje 404 no Vercel)

`app.py` só entrega `/` + `static_folder='assets'`. Adicionar rotas (exemplo):

```python
@app.route('/robots.txt')
def robots_txt():
    return send_file('robots.txt', mimetype='text/plain')

@app.route('/sitemap.xml')
def sitemap_xml():
    return send_file('sitemap.xml', mimetype='application/xml')

@app.route('/llms.txt')
def llms_txt():
    return send_file('llms.txt', mimetype='text/plain')
```

Validar após deploy:
- `https://<host>/robots.txt` → 200  
- `https://<host>/sitemap.xml` → 200  
- `https://<host>/llms.txt` → 200 e texto BaixarVideoYT  

### `robots.txt` — linha Sitemap corrigida

```text
User-agent: *
Allow: /

# Permitir crawlers de busca de IA (Generative Engine Optimization)
User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

# Bloquear crawlers de treinamento pesados (Economia de Banda / Zero ganho de tráfego)
User-agent: GPTBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

Sitemap: https://baixarvideoyt.com.br/sitemap.xml
```

---

## 6. JSON-LD Organization / WebApplication — **DRAFT** (sem ratings falsos)

Não há `Organization` hoje. Há `SoftwareApplication` + `WebSite` + `FAQPage`.  
Colar **após** o bloco WebSite existente, se quiser reforçar entidade (draft — revisar `logo`/`sameAs` antes de produção):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BaixarVideoYT",
  "url": "https://baixarvideoyt.com.br/",
  "description": "Ferramenta web gratuita para baixar vídeos e áudios do YouTube em MP4 ou MP3.",
  "sameAs": [
    "https://github.com/mateusj-basilio/baixar-video-yt"
  ]
}
</script>
```

Opcional — alinhar tipo de app (draft; pode **substituir** o SoftwareApplication atual ou coexistir com cuidado para não duplicar ofertas):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "BaixarVideoYT",
  "url": "https://baixarvideoyt.com.br/",
  "applicationCategory": "MultimediaApplication",
  "operatingSystem": "Any",
  "browserRequirements": "Requires JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "BRL"
  },
  "description": "Baixar vídeo do YouTube em MP4 e MP3 grátis, online, sem instalar."
}
</script>
```

**Não incluir:** `aggregateRating`, `review`, `ratingValue`, número de downloads — nenhum verificado.

---

## 7. Ordem sugerida de commit (local)

1. Fix infra domínio **ou** canonical temporário  
2. Rotas estáticas + robots/sitemap/llms corrigidos  
3. H1 (+ subhead)  
4. Organization draft (opcional no mesmo PR)

Não fazer push a partir deste agente.
