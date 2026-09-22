# Brief — Ideia #04

**Página:** `/baixar-youtube-no-celular` (landing dedicada how-to)  
**Produto:** BaixarVideoYT — https://baixarvideoyt.com.br/ (se DNS instável, usar o host live no canônico até estabilizar)  
**Repo:** `C:\Mateus\python-programs\youtube-downloader` · `mateusj-basilio/baixar-video-yt`  
**Status no board:** idea → briefed  
**Idioma:** pt-BR  
**Depende de P0 técnico:** rotas estáticas no Flask/Vercel + sitemap.

---

## 1. Objetivo

Converter quem busca **baixar YouTube no celular** (Android/iPhone) em um fluxo claro: copiar link no app → colar no site no navegador → salvar MP4/MP3.

**Job to be done:** “Estou no celular, copiei o link no YouTube e quero o arquivo no aparelho.”

---

## 2. Para quem

- Usuários mobile-first (Android e iPhone)  
- Quem confunde YouTube Premium offline com download de arquivo  
- Quem já tentou apps duvidosos e quer caminho no navegador  

**Não é para:** root/jailbreak, APK de baixador, nem “hack” do app oficial.

---

## 3. Termos-alvo (sementes — sem volume inventado)

- como baixar vídeo do youtube no celular  
- baixar youtube android  
- baixar youtube iphone  
- baixar youtube no safari  
- baixar vídeo youtube celular grátis  

Secundários: baixar youtube chrome android, baixar youtube arquivos iphone.

---

## 4. Relação com a home

A home já tem FAQ “Como baixar… no celular?”. Esta landing **expande** o passo a passo Android vs iPhone e reforça CTA para o downloader.

Na home: link “Guia completo no celular” no FAQ → `/baixar-youtube-no-celular`.

---

## 5. Spec da URL

| Campo | Valor |
|-------|--------|
| Path | `/baixar-youtube-no-celular` |
| Title | `Como Baixar Vídeo do YouTube no Celular (Android e iPhone) \| BaixarVideoYT` |
| H1 | `Como baixar vídeo do YouTube no celular` |
| Meta description | `Baixe vídeos do YouTube no Android ou iPhone pelo navegador: copie o link no app, cole no BaixarVideoYT e salve MP4 ou MP3. Grátis, sem instalar.` |
| Canonical | `https://baixarvideoyt.com.br/baixar-youtube-no-celular` (ou host live estável) |

---

## 6. Estrutura da página (ordem)

1. **Hero** — H1 + 2 frases + CTA “Abrir baixador”  
2. **Passo a passo Android** — compartilhar/copiar link → Chrome → colar → Downloads  
3. **Passo a passo iPhone** — compartilhar → Copiar → Safari → colar → app Arquivos  
4. **Arquivo vs Premium** — deixar claro: BaixarVideoYT gera arquivo; Premium é offline dentro do app  
5. **MP4 ou MP3 no celular** — link para landings #02/#07  
6. **FAQ** (3–5) + `FAQPage`  
7. **CTA final**  

### FAQ sugerido

1. Como baixar vídeo do YouTube no Android?  
2. Como baixar no iPhone (Safari)?  
3. Onde o arquivo fica salvo?  
4. Preciso do YouTube Premium?  
5. Funciona sem instalar app?

---

## 7. AEO / GEO

- Respostas citáveis por SO (Android Downloads / iPhone Arquivos)  
- Linha: “No celular, use o navegador: cole o link do YouTube no BaixarVideoYT e salve o MP4 ou MP3.”  
- Entity: **BaixarVideoYT**  
- Sem AggregateRating inventado  

---

## 8. Implementação técnica

1. Criar `baixar-youtube-no-celular.html` com assets de `/assets/`  
2. Flask:
   ```python
   @app.route('/baixar-youtube-no-celular')
   def page_celular():
       return send_file('baixar-youtube-no-celular.html')
   ```
3. Sitemap + link interno no FAQ da home  
4. og tags quando P1 de imagem existir  

---

## 9. Claims

**Ok:** funciona no navegador mobile, grátis, sem instalar, Android/iPhone, arquivo vai ao dispositivo.  
**Evitar:** volumes, “melhor que Premium”, “sempre na galeria” (iOS salva em Arquivos — alinhar), APKs.

---

## 10. Critério de pronto

- Title/H1 falam celular  
- Passos Android e iPhone distintos e honestos  
- FAQ diferencia arquivo vs Premium  
- Sitemap + rota 200  
- Sem métricas inventadas  

---

## 11. Próximo no board

Brief #05 — Baixar YouTube seguro / sem vírus → `/baixar-youtube-seguro`.
