# app.py — rotas a adicionar (BaixarVideoYT)

**Contexto:** hoje o Flask só serve `/` + `static_folder='assets'`. Por isso `robots.txt`, `sitemap.xml` e `llms.txt` retornam **404** no Vercel mesmo existindo no repo.

**Uso:** colar no `app.py` (após imports / criação do `app`). Garantir `from flask import send_file` (ou equivalente já importado).

**Arquivos HTML/estáticos** devem ficar na raiz do projeto (mesmo nível de `index.html`), não só em `assets/`.

---

## 1. SEO na raiz (obrigatório P0)

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

---

## 2. Landings com scaffold neste pack (P1)

```python
@app.route('/youtube-para-mp3')
def page_youtube_mp3():
    return send_file('youtube-para-mp3.html')

@app.route('/baixar-youtube-shorts')
def page_shorts():
    return send_file('baixar-youtube-shorts.html')

@app.route('/baixar-youtube-no-celular')
def page_celular():
    return send_file('baixar-youtube-no-celular.html')
```

---

## 3. Landings briefed (adicionar quando o HTML existir)

```python
@app.route('/baixar-youtube-seguro')
def page_seguro():
    return send_file('baixar-youtube-seguro.html')

@app.route('/onde-ficam-salvos-downloads-youtube')
def page_onde_salvos():
    return send_file('onde-ficam-salvos-downloads-youtube.html')

@app.route('/mp4-ou-mp3-youtube')
def page_mp4_ou_mp3():
    return send_file('mp4-ou-mp3-youtube.html')

@app.route('/baixar-playlist-youtube')
def page_playlist():
    return send_file('baixar-playlist-youtube.html')

@app.route('/baixar-aulas-youtube')
def page_aulas():
    return send_file('baixar-aulas-youtube.html')

@app.route('/baixar-podcast-youtube')
def page_podcast():
    return send_file('baixar-podcast-youtube.html')

@app.route('/baixar-youtube-4k')
def page_4k():
    return send_file('baixar-youtube-4k.html')

@app.route('/qualidade-mp3-youtube')
def page_qualidade_mp3():
    return send_file('qualidade-mp3-youtube.html')
```

**Nota:** não registre rotas §3 até os arquivos `.html` existirem (evita 500). Sitemap deste pack já lista todos os paths — publique HTML + rota juntos, ou remova do sitemap paths ainda sem HTML.

---

## 4. Bloco único sugerido (SEO + scaffolds 02–04)

```python
# --- SEO estáticos na raiz ---
@app.route('/robots.txt')
def robots_txt():
    return send_file('robots.txt', mimetype='text/plain')

@app.route('/sitemap.xml')
def sitemap_xml():
    return send_file('sitemap.xml', mimetype='application/xml')

@app.route('/llms.txt')
def llms_txt():
    return send_file('llms.txt', mimetype='text/plain')

# --- Landings SEO (scaffolds) ---
@app.route('/youtube-para-mp3')
def page_youtube_mp3():
    return send_file('youtube-para-mp3.html')

@app.route('/baixar-youtube-shorts')
def page_shorts():
    return send_file('baixar-youtube-shorts.html')

@app.route('/baixar-youtube-no-celular')
def page_celular():
    return send_file('baixar-youtube-no-celular.html')
```

---

## 5. Alternativa / complemento Vercel

Se o runtime não passar por Flask para estáticos, use também `vercel.json` deste pack (`headers`/`rewrites` ou `routes` para arquivos na raiz). Em muitos deploys Flask no Vercel, **as rotas acima já bastam** desde que os arquivos estejam no bundle.

Validar após deploy: 200 em `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/youtube-para-mp3`.
