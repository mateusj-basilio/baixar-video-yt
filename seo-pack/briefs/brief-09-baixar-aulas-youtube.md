# Brief — Ideia #09

**Página:** `/baixar-aulas-youtube` (landing de caso de uso — estudantes)  
**Produto:** BaixarVideoYT — https://baixarvideoyt.com.br/ (se DNS instável, usar host live no canônico)  
**Repo:** `C:\Mateus\python-programs\youtube-downloader` · `mateusj-basilio/baixar-video-yt`  
**Status no board:** idea → briefed  
**Idioma:** pt-BR  
**Depende de P0 técnico:** rotas Flask/Vercel + sitemap.

---

## 1. Objetivo

Converter estudantes/pesquisadores que querem **aulas e tutoriais offline** (economia de dados / foco) no download MP4 ou MP3.

**Job to be done:** “Quero assistir/ouvir a aula sem internet depois.”

---

## 2. Para quem

- Estudantes e concurseiros  
- Pesquisadores guardando palestras públicas  
- Quem estuda no transporte  

**Não é para:** baixar cursos pagos / conteúdo com DRM sem autorização.

---

## 3. Termos-alvo (sementes — sem volume inventado)

- baixar aula youtube  
- baixar tutorial youtube offline  
- assistir aula youtube sem internet  
- baixar palestra youtube  
- baixar vídeo aula youtube mp4  

Secundários: estudar offline youtube, baixar curso youtube (cuidado com tom).

---

## 4. Relação com a home

Home tem bloco “Estudantes e Pesquisadores”. Landing aprofunda caso de uso + CTA.

---

## 5. Spec da URL

| Campo | Valor |
|-------|--------|
| Path | `/baixar-aulas-youtube` |
| Title | `Baixar Aulas do YouTube para Estudar Offline \| BaixarVideoYT` |
| H1 | `Baixar aulas do YouTube para estudar offline` |
| Meta description | `Salve aulas e tutoriais do YouTube em MP4 ou MP3 e estude sem internet. Grátis, no navegador, sem instalar — BaixarVideoYT.` |
| Canonical | `https://baixarvideoyt.com.br/baixar-aulas-youtube` (ou host live estável) |

---

## 6. Estrutura da página (ordem)

1. **Hero** — H1 + CTA  
2. **Por que offline** — dados, foco, viagem (qualitativo)  
3. **MP4 vs MP3 para estudo** — ver slides vs só ouvir  
4. **Passo a passo** — 3 passos  
5. **Uso legítimo** — conteúdo que você tem direito de baixar para uso pessoal/estudo; não piratear cursos pagos  
6. **FAQ** + `FAQPage`  
7. **CTA final**  

### FAQ sugerido

1. Como baixar uma aula do YouTube para ver sem internet?  
2. Melhor baixar aula em MP4 ou MP3?  
3. Funciona no celular para estudar no ônibus?  
4. Posso baixar qualquer curso do YouTube?  
5. O arquivo fica no meu dispositivo?

---

## 7. AEO / GEO

- Tom educacional, citável  
- Entity: **BaixarVideoYT**  
- Evitar incentivo a pirataria  

---

## 8. Implementação técnica

1. `baixar-aulas-youtube.html`  
2. Flask route  
3. Sitemap + link do bloco audiência  

---

## 9. Claims

**Ok:** offline, grátis, browser, MP4/MP3.  
**Evitar:** “baixe qualquer curso pago”; volumes; “melhor app de estudo”.

---

## 10. Critério de pronto

- Soft CTA + aviso de uso legítimo  
- FAQ cobre formato + celular  
- Sitemap + rota 200  

---

## 11. Próximo no board

Brief #10 — Podcast/videocast MP3 → `/baixar-podcast-youtube`.
