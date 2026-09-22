# Brief — Ideia #05

**Página:** `/baixar-youtube-seguro` (landing de confiança)  
**Produto:** BaixarVideoYT — https://baixarvideoyt.com.br/ (se DNS instável, usar host live no canônico)  
**Repo:** `C:\Mateus\python-programs\youtube-downloader` · `mateusj-basilio/baixar-video-yt`  
**Status no board:** idea → briefed  
**Idioma:** pt-BR  
**Depende de P0 técnico:** rotas Flask/Vercel + sitemap.

---

## 1. Objetivo

Converter quem busca **baixar YouTube sem vírus / site seguro** em confiança suficiente para colar o link e baixar no BaixarVideoYT.

**Job to be done:** “Quero baixar sem cair em adware, fake Download ou malware.”

---

## 2. Para quem

- Usuários que já foram queimados por pop-ups e botões falsos  
- Pais / usuários cautelosos no celular  
- Quem compara “sem anúncio invasivo” vs baixadores clássicos  

**Não é para:** auditoria de segurança formal, nem claims de “certificado antivírus” sem evidência.

---

## 3. Termos-alvo (sementes — sem volume inventado)

- baixar youtube sem vírus  
- baixar vídeo youtube seguro  
- site seguro baixar youtube  
- youtube downloader sem anúncio  
- baixar youtube sem malware  

Secundários: baixar youtube sem adware, conversor youtube confiável.

---

## 4. Relação com a home

Home FAQ “É totalmente gratuito e seguro?”. Landing **aprofunda** sinais de confiança e aponta CTA ao downloader.

Link na home: card/FAQ segurança → `/baixar-youtube-seguro`.

---

## 5. Spec da URL

| Campo | Valor |
|-------|--------|
| Path | `/baixar-youtube-seguro` |
| Title | `Baixar YouTube Seguro: sem vírus e sem anúncios invasivos \| BaixarVideoYT` |
| H1 | `Baixar YouTube de forma segura (sem vírus)` |
| Meta description | `Saiba como baixar vídeos do YouTube com menos risco de adware: use o BaixarVideoYT no navegador, sem cadastro e sem instalar. Cole o link e salve MP4 ou MP3.` |
| Canonical | `https://baixarvideoyt.com.br/baixar-youtube-seguro` (ou host live estável) |

---

## 6. Estrutura da página (ordem)

1. **Hero** — H1 + 2 frases + CTA  
2. **Por que a SERP é arriscada** — botões falsos “Download”, redirects (qualitativo, sem inventar %)  
3. **Como o BaixarVideoYT funciona** — no browser, sem instalar executável  
4. **Boas práticas do usuário** — não baixar APKs de terceiros; fechar pop-ups suspeitos; preferir HTTPS  
5. **O que não prometemos** — sem inventar auditorias ou “100% seguro para sempre”  
6. **FAQ** + `FAQPage`  
7. **CTA final**  

### FAQ sugerido

1. É seguro baixar vídeo do YouTube pelo BaixarVideoYT?  
2. Preciso instalar algum programa?  
3. Vocês pedem cadastro ou cartão?  
4. Como evitar sites com vírus ao baixar YouTube?  
5. O arquivo fica guardado nos servidores de vocês?

Respostas: honestas; alinhar ao backend real (arquivo vai ao dispositivo; não inventar política de retenção se não documentada).

---

## 7. AEO / GEO

- Frases citáveis curtas sobre “navegador, sem instalar, sem cadastro”  
- Entity: **BaixarVideoYT**  
- Evitar “#1 mais seguro do Brasil” e ratings falsos  

---

## 8. Implementação técnica

1. `baixar-youtube-seguro.html` + assets `/assets/`  
2. Flask route `/baixar-youtube-seguro`  
3. Sitemap + link interno  
4. og tags em P1  

---

## 9. Claims

**Ok:** grátis, sem cadastro, sem instalar, foco em privacidade / sem adware invasivo *se for verdade no produto*.  
**Evitar:** “100% sem vírus”, auditorias inventadas, volumes, superlativos vazios.

---

## 10. Critério de pronto

- Tom de confiança sem medo exagerado  
- CTA claro para o downloader  
- FAQ responde instalar/cadastro/malware  
- Sitemap + rota 200  
- Sem métricas inventadas  

---

## 11. Próximo no board

Brief #06 — Onde ficam salvos os downloads → `/onde-ficam-salvos-downloads-youtube`.
