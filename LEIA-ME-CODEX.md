# VISION.MOVV V2 — projeto completo

Este pacote contém a V2 com o portfólio completo, sem misturar projetos.

## Abrir agora

Abra `index.html` diretamente. Mantenha `index.html`, `app/` e `public/` na
mesma estrutura.

## Estrutura importante

- `app/page.tsx`: interface React, modal, idiomas e interações.
- `app/portfolio-data.ts`: fonte única dos 18 projetos.
- `app/globals.css`: layout, temas, responsividade e motion.
- `public/fonts/`: Manrope para leitura e Antonio para títulos, ambas locais.
- `public/portfolio/projects/`: 182 fotos e vídeos exibidos, separados por slug.
- `public/portfolio/portfolio-manifest.js`: os mesmos projetos para o HTML standalone.
- `PORTFOLIO-INVENTARIO.json`: correspondência das 184 mídias originais.
- `index.html`: versão standalone pronta para `file://`.
- `dist/`: build pronto.

## Regras para continuar

1. Não mover, renomear ou misturar arquivos entre `public/portfolio/projects/*`.
2. Sensation Label usa somente as 17 fotos da pasta Sensation.
3. DJ Denali usa somente `dj-denali/video-01.mp4`.
4. Manter o detalhe de cada projeto isolado e sem overlays sobre a mídia.
5. Preservar tema claro/escuro, PT-BR/EN e `prefers-reduced-motion`.

Para desenvolvimento:

```bash
npm install
npm run dev
```
