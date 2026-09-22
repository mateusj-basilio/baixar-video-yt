# Brief — Ideia #01

**Página / peça:** Home (priorizar intent MP4) — opcional depois extrair para `/baixar-video-youtube-mp4`  
**Produto:** BaixarVideoYT — https://baixarvideoyt.com.br/  
**Repo local:** `C:\Mateus\python-programs\youtube-downloader`  
**Status no board:** idea → briefed  
**Idioma:** pt-BR  
**Entrega:** otimização de copy/estrutura no `index.html` (não é artigo de blog longo). Eu (SEO Desk) não escrevo o HTML final; o escritor ou o agente de código aplica este brief.

---

## 1. Objetivo da página

Converter quem busca baixar vídeo do YouTube em MP4 (online, grátis, sem instalar) em um primeiro download bem-sucedido, com confiança alta (seguro, sem vírus/adware, sem cadastro).

**Job to be done:** “Colei o link do YouTube e quero o arquivo MP4 no celular ou no PC agora.”

---

## 2. Para quem

- Usuário casual no celular (Android/iPhone) que copiou o link no app do YouTube  
- Criador/editor que quer clipe limpo, sem marca d’água  
- Quem já caiu em sites com pop-ups e busca uma alternativa “limpa”

**Não é para:** tutorial de yt-dlp, extensão de browser, ou “como piratear curso pago”.

---

## 3. Termos-alvo (sementes — sem volume/difficulty inventados)

Usar na title, H1/H2 e FAQ de forma natural. **Não** inventar números de busca.

- baixar vídeo youtube  
- baixar vídeo do youtube mp4  
- baixar youtube online grátis  
- conversor youtube mp4  
- baixar youtube sem instalar  

Secundários (já cobertos ou próximos na home): youtube mp3, shorts, celular, seguro.

---

## 4. Concorrência observada (qualitativo)

Landings pt-BR do tipo “baixador / conversor YouTube → cole o link → MP4 → sem cadastro/instalar” (ex.: padrões em Vid-Save, YTD.APP, Any4K e similares). Diferenciar BaixarVideoYT por: zero adware, sem marca d’água, Shorts + playlist, tom de produto limpo — **sem** claims tipo “#1 do Brasil” ou volume inventado.

---

## 5. O que a home já tem (estado atual)

- **Title:** Baixar Vídeo do YouTube em MP4 e MP3 Grátis | BaixarVideoYT  
- **Meta description:** Baixar vídeo do YouTube online, rápido e grátis… MP4 (Full HD) e MP3… Sem anúncios e sem cadastro.  
- **H1 atual:** Extraia Vídeos e Áudios em Segundos. Grátis.  
- Blocos: conversão / formatos (Shorts, 4K, MP3) / audiências / 3 passos / FAQ (6 itens) + FAQPage schema  
- CTA: campo de URL no hero  

**Gap principal:** o H1 vende “extraia em segundos” e não diz a query de dinheiro (baixar vídeo YouTube MP4). Title já está alinhado; o H1 e o primeiro parágrafo deveriam espelhar a title.

---

## 6. Estrutura recomendada (home)

Ordem sugerida (manter o downloader no topo):

1. **Hero** — H1 + 1 parágrafo + input de URL + prova rápida (grátis / sem instalar / sem marca d’água)  
2. **Como funciona** — 3 passos (já existe; manter curto)  
3. **Por que este site** — velocidade, privacidade, qualidade (evitar superlativos vazios)  
4. **Formatos** — MP4 / Shorts / MP3 (links internos futuros para landings #2 e #3)  
5. **Para quem** — estudantes, criadores, podcasts (já existe)  
6. **FAQ** — manter schema FAQPage; alinhar perguntas às queries  

### Title (manter ou ajuste leve)
`Baixar Vídeo do YouTube em MP4 e MP3 Grátis | BaixarVideoYT`

### H1 (trocar)
`Baixar vídeo do YouTube em MP4 grátis (online, sem instalar)`

### Subhead / primeiro parágrafo (2–3 frases)
Dizer: cole o link → escolha MP4 ou MP3 → download no navegador. Citar Full HD/4K **quando o vídeo fonte tiver**. Citar sem cadastro, sem instalar, sem marca d’água. Não prometer “sempre 4K” nem “ilimitado absoluto” se o produto tem nuance (vídeos longos demoram mais — já está no FAQ).

### CTAs
- Primário: Analisar / Baixar (texto do botão atual)  
- Secundário no FAQ e nos blocos: âncora `#` no input  

---

## 7. FAQ — manter e endurecer respostas

| Pergunta (manter) | Direção da resposta |
|---|---|
| Como baixar no celular? | Copiar link no app → colar no site → MP4 → Android: Downloads; iPhone: Arquivos |
| É gratuito e seguro? | Sem cadastro; sem instalar malware; sem abas invasivas — sem inventar auditorias |
| Converter para MP3? | Mesmo fluxo; botão de áudio; mencionar qualidade alta / 320 kbps se for verdade no produto |
| Limite de tamanho/tempo? | Ser honesto (ex.: vídeos >2h podem demorar) — já alinhado ao site |
| MP4 vs MP3? | Vídeo+áudio vs só áudio; casos de uso |
| Onde salva no iPhone/Android? | Downloads vs Arquivos — já no site |

Opcional (só se couber sem poluir): “Funciona com Shorts?” / “Precisa instalar extensão?”

---

## 8. Claims permitidos vs evitar

**Ok (se o produto faz):** grátis, sem cadastro, sem instalar, sem marca d’água, MP4/MP3, Shorts, playlist, Full HD/4K quando disponível na fonte, privacidade (não guardar o arquivo do usuário para sempre — alinhar ao que o backend realmente faz).

**Evitar:** volumes de busca, “melhor do Brasil”, “100% sem vírus” sem base, “sempre 4K”, “ilimitado” absoluto, incentivar pirataria de conteúdo pago.

---

## 9. On-page técnico (checklist para quem edita o HTML)

- [ ] H1 único alinhado à query MP4  
- [ ] Title ≤ ~60 chars se possível (atual já ok)  
- [ ] Meta description com MP4 + grátis + sem cadastro  
- [ ] FAQPage schema atualizado se mudar perguntas/respostas  
- [ ] `llms.txt` com marca BaixarVideoYT (ver arquivo entregue)  
- [ ] `sitemap.xml` ainda só home — ok até existirem rotas novas  
- [ ] Links internos futuros: quando existirem páginas #2/#3, apontar dos cards de formato  

---

## 10. Critério de pronto

- Visitante entende em 3 segundos que pode baixar MP4 do YouTube grátis sem instalar  
- H1 e title falam a mesma intenção  
- FAQ responde celular + segurança + formatos sem contradição  
- Nenhum número de SEO inventado na página  

---

## 11. Próximo passo sugerido (depois deste brief)

1. Aplicar H1 + subhead + `llms.txt` na pasta do projeto  
2. Brief #2 (YouTube → MP3) como landing `/youtube-para-mp3`  
3. Brief #3 (Shorts)  
