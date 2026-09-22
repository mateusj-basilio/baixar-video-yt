# Brief — Ideia #06

**Página:** `/onde-ficam-salvos-downloads-youtube` (landing curta / FAQ reforçado)  
**Produto:** BaixarVideoYT — https://baixarvideoyt.com.br/ (se DNS instável, usar host live no canônico)  
**Repo:** `C:\Mateus\python-programs\youtube-downloader` · `mateusj-basilio/baixar-video-yt`  
**Status no board:** idea → briefed  
**Idioma:** pt-BR  
**Depende de P0 técnico:** rotas Flask/Vercel + sitemap.

---

## 1. Objetivo

Responder de forma citável **onde o arquivo fica salvo** após baixar YouTube (Android Downloads vs iPhone Arquivos), reduzindo bounce pós-primeiro uso.

**Job to be done:** “Baixei — onde está o vídeo/áudio no meu celular?”

---

## 2. Para quem

- Usuários iPhone confusos com app Arquivos  
- Usuários Android procurando pasta Downloads  
- Quem mistura Downloads do Premium com download de arquivo  

**Não é para:** guia de recuperação de arquivos apagados ou root.

---

## 3. Termos-alvo (sementes — sem volume inventado)

- onde ficam salvos vídeos baixados iphone  
- onde salva download youtube android  
- pasta downloads safari  
- app arquivos iphone  
- onde fica o vídeo baixado do youtube  

Secundários: downloads chrome android, baixar youtube onde salva.

---

## 4. Relação com a home

Home FAQ já cobre o tema. Preferência: **landing curta** (não só FAQ inline) para AEO, com CTA de volta ao downloader.

Na home: link “Onde ficam salvos?” → esta URL.

---

## 5. Spec da URL

| Campo | Valor |
|-------|--------|
| Path | `/onde-ficam-salvos-downloads-youtube` |
| Title | `Onde Ficam Salvos os Downloads do YouTube? (Android e iPhone) \| BaixarVideoYT` |
| H1 | `Onde ficam salvos os downloads do YouTube?` |
| Meta description | `No Android, o arquivo do BaixarVideoYT vai para Downloads. No iPhone, abra o app Arquivos. Saiba onde encontrar MP4 e MP3 depois de baixar.` |
| Canonical | `https://baixarvideoyt.com.br/onde-ficam-salvos-downloads-youtube` (ou host live estável) |

---

## 6. Estrutura da página (ordem)

1. **Hero** — H1 + resposta em 2 frases (Android / iPhone)  
2. **Android** — pasta Downloads / notificação do Chrome  
3. **iPhone** — app Arquivos → No meu iPhone / Downloads (conforme comportamento do Safari)  
4. **Desktop** — pasta padrão do navegador  
5. **Premium vs arquivo** — uma caixa curta  
6. **FAQ** (3–5) + `FAQPage`  
7. **CTA** — baixar outro vídeo  

### FAQ sugerido

1. Onde o vídeo baixado fica no Android?  
2. Onde fica no iPhone?  
3. Por que não aparece na Galeria / Fotos?  
4. O BaixarVideoYT guarda o arquivo na nuvem?  
5. E no computador (Windows/Mac)?

---

## 7. AEO / GEO

- Resposta em destaque no topo (snippet-ready)  
- Linha: “Com o BaixarVideoYT, o arquivo vai para a pasta de downloads do seu dispositivo — no iPhone, use o app Arquivos.”  
- Sem ratings inventados  

---

## 8. Implementação técnica

1. `onde-ficam-salvos-downloads-youtube.html`  
2. Flask route homônima  
3. Sitemap + link no FAQ da home  

---

## 9. Claims

**Ok:** caminhos típicos Android/iPhone/desktop; arquivo no dispositivo.  
**Evitar:** caminhos absolutos inventados por marca de aparelho; “sempre na Galeria”; volumes.

---

## 10. Critério de pronto

- Resposta Android + iPhone acima da dobra  
- FAQ cobre Galeria vs Arquivos  
- Sitemap + rota 200  
- Sem métricas inventadas  

---

## 11. Próximo no board

Brief #07 — MP4 ou MP3 → `/mp4-ou-mp3-youtube`.
