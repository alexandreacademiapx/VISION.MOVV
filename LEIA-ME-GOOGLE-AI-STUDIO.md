# Importar no Google AI Studio

1. Envie o ZIP inteiro, sem extrair arquivos isolados.
2. Peça ao modelo para ler primeiro `LEIA-ME-CODEX.md`,
   `PORTFOLIO-INVENTARIO.json`, `app/portfolio-data.ts` e `index.html`.
3. Use este pedido:

> Preserve exatamente a estrutura, os 18 projetos, os caminhos das mídias,
> os motions, o tema claro/escuro e PT-BR/EN. Não misture mídias entre
> projetos. Preserve o sistema tipográfico local: Manrope para leitura e
> Antonio para títulos e assinatura visual. Antes de editar, liste os arquivos
> que serão alterados.

O ponto de entrada sem build é `index.html`. O ponto de entrada React é
`app/page.tsx`.

As fontes ficam em `public/fonts/` e não dependem de Google Fonts ou de conexão
externa para aparecer corretamente.
