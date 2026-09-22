# vercel.json — documentação

**Arquivo:** `vercel.json` (neste pack)

## Para que serve
Garante `Content-Type` e cache curto para `robots.txt`, `sitemap.xml` e `llms.txt` na raiz, se o CDN/Vercel servir esses arquivos como estáticos.

## O que NÃO resolve sozinho
Se o projeto é uma app Flask cuja única entrada é `app.py` e **não** há output estático na raiz do deployment, os arquivos ainda precisam de **rotas Flask** (`app.py.patch.md`). O `vercel.json` deste pack **não** substitui as rotas — é complemento de headers.

## Como usar
1. Copiar `vercel.json` para a raiz do repo (`C:\Mateus\python-programs\youtube-downloader` / `mateusj-basilio/baixar-video-yt`).
2. Manter `robots.txt`, `sitemap.xml`, `llms.txt` na raiz do projeto incluída no deploy.
3. Preferir também as rotas Flask P0 (obrigatório no estado atual: 404 live).
4. Após deploy, validar 200 + body correto.

## cleanUrls / trailingSlash
`cleanUrls: true` e `trailingSlash: false` alinham paths das landings sem barra final — coerente com as URLs do sitemap. Se o Flask já define o comportamento, revise conflitos no primeiro deploy.

## Se já existir vercel.json no repo
Faça merge manual das chaves `headers` (e opcionalmente cleanUrls) em vez de sobrescrever config de build/runtime existente.
