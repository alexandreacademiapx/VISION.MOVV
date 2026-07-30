# VISION.MOVV - instrucoes permanentes para o Codex

## Objetivo do projeto

Este repositorio contem o portfolio audiovisual autoral VISION.MOVV, de Alexandre Machado.

O site deve apresentar o trabalho com uma linguagem cinematografica, autoral, precisa e contemporanea. A obra vem antes da interface. O acabamento pode evoluir, mas a estrutura aprovada nao deve ser descaracterizada.

## Repositorio e producao

- Repositorio oficial: `https://github.com/alexandreacademiapx/VISION.MOVV`
- Branch de producao: `main`
- Producao: `https://visionmovv.vercel.app/`
- O Vercel publica automaticamente os pushes enviados para `main`.
- Stack atual: Next.js 16.2.6, React 19.2.6 e Node 22.x.
- A fonte oficial do projeto e o GitHub. Nao usar ZIP, Google Drive ou Google AI Studio como fonte principal.

## Inicio obrigatorio de cada tarefa

Antes de alterar qualquer arquivo:

1. Execute `git status`.
2. Sincronize com `git pull --ff-only origin main`, desde que a arvore de trabalho esteja limpa.
3. Leia integralmente:
   - `PRODUCT.md`
   - `package.json`
   - `app/page.tsx`
   - `app/globals.css`
   - `app/layout.tsx`
   - `app/portfolio-data.ts`
4. Examine os commits recentes com `git log`.
5. Entenda o estado atual antes de editar.
6. Preserve alteracoes existentes que nao pertencam a tarefa.

Se o pedido for apenas analise, diagnostico, revisao ou explicacao, nao editar, nao fazer commit e nao publicar.

Se o pedido incluir implementacao e entrega, implementar, validar, fazer commit, enviar para `main` e conferir o deploy real no Vercel.

## Direcao aprovada

- Preservar a estrutura, a ordem das secoes, a ordem dos projetos e a composicao geral.
- Fazer mudancas focadas, proporcionais e justificadas.
- Priorizar refinamento visual, responsividade, legibilidade, consistencia e qualidade percebida.
- Evitar aparencia de template generico, excesso de efeitos ou interface que dispute atencao com as obras.
- Nao inventar textos institucionais, descricoes ou dados de projetos sem aprovacao.
- Nao remover, regenerar, trocar ou misturar imagens e videos originais entre projetos sem autorizacao.
- Quando uma decisao visual mudar a direcao aprovada, apresentar as opcoes antes de implementar.

## Tipografia, tema e idioma

- Titulos e elementos display: Barlow Condensed.
- Textos de corpo: Barlow.
- Pacotes: `@fontsource/barlow` e `@fontsource/barlow-condensed`.
- Nao substituir as fontes sem autorizacao.
- O site funciona em PT-BR e EN.
- O site funciona nos temas claro e escuro.
- Tema e idioma sao persistidos em `localStorage`.
- Toda mudanca deve continuar funcionando nos dois idiomas e nos dois temas.

## Header e comportamento mobile

- No mobile, navegacao e controles de tema/idioma ficam em duas linhas compactas.
- Esses controles nao podem se sobrepor.
- Manter alvos de toque com aproximadamente 44 px.
- Respeitar safe areas do iPhone e navegadores internos, inclusive Instagram.
- Validar portrait e landscape.
- Nao alterar o comportamento do desktop para resolver um problema exclusivamente mobile.

## Hero aprovado

- O hero usa o GIF `public/portfolio/projects/ia-generativa/hero-montage.gif`.
- O GIF foi criado com imagens do projeto IA Generativa.
- Dimensoes aproximadas: 768 x 432, 24 frames e ciclo de 3,12 segundos.
- Preservar as cores originais.
- Nao adicionar `opacity`, filtro, tint, camada esmaecida ou overlay sobre o GIF.
- A classe `hero-media-gif` remove overlays visuais.
- Para `prefers-reduced-motion`, usar o fallback estatico `image-003.jpg`.
- O texto branco do hero pode ter apenas sombra neutra e discreta.

## Motion aprovado

- Desktop:
  - `heroSlideDistance = 92`
  - `heroLiftDistance = -90`
  - escala de parallax = 1
- Mobile:
  - slide = 44
  - lift = -64
  - parallax = 0.68
- No mobile, os projetos alternam pequenos deslocamentos horizontais de aproximadamente 12 px e deslocamento vertical de 48 px.
- Pointer aura e hover 3D permanecem exclusivos do desktop por dependerem de cursor.
- Landscape mobile possui composicao propria.
- Nao uniformizar motion de desktop e mobile sem analisar a intencao de cada dispositivo.

## Conteudo dos projetos

- Os paragrafos internos de apoio dos projetos foram removidos intencionalmente.
- Nao voltar a renderizar os campos `body` dos projetos.
- A lista de servicos deve comecar imediatamente, sem o antigo paragrafo de apoio.
- Os dados podem continuar contendo `body` em `app/portfolio-data.ts`, mas esse campo nao deve aparecer na interface.
- Um problema anterior de imagens no navegador do Instagram foi confirmado como falha de conexao e ja foi resolvido. Nao alterar o sistema de midia por esse motivo sem nova evidencia.

## Arquivos principais

- `app/page.tsx`: componentes, header, hero, detalhes de projetos e motion.
- `app/globals.css`: identidade visual, responsividade, tipografia e animacoes.
- `app/layout.tsx`: fontes, metadata e viewport.
- `app/portfolio-data.ts`: dados, textos, servicos e midias dos projetos.
- `public/portfolio/projects/`: imagens, GIFs e videos.
- `PRODUCT.md`: principios de produto e direcao visual.

## Skills de design

Quando estiverem disponiveis, usar as skills Impeccable, UI UX Pro Max e UI Polish em tarefas de revisao e refinamento visual.

As skills devem orientar o acabamento sem substituir a direcao aprovada deste arquivo e de `PRODUCT.md`. Caminhos locais do Windows nao sao portaveis para o Mac; verificar a disponibilidade real antes de afirmar que uma skill foi usada.

## Validacao obrigatoria

Depois de implementar uma alteracao:

1. Execute `npm run lint`.
2. Execute `npm run build`.
3. Corrija todos os erros.
4. Existem tres avisos conhecidos do Next.js relacionados ao uso de `<img>`. Eles nao sao erros de build, mas nao criar novos avisos desnecessarios.
5. Nao considerar a entrega concluida apenas porque o build passou.

Quando a mudanca afetar interface, conteudo visual, motion ou responsividade, verificar:

- Mobile com 375 px de largura.
- Mobile em landscape.
- Desktop com aproximadamente 1440 px.
- Tema escuro.
- Tema claro.
- PT-BR.
- EN.
- Abertura dos detalhes de projeto.
- Header e controles de tema/idioma.
- Carregamento do GIF, imagens e videos afetados.

## Publicacao

Quando o usuario pedir implementacao e entrega:

1. Resumir o que foi alterado.
2. Executar os testes aplicaveis.
3. Conferir `git diff` e `git status`.
4. Fazer commit com mensagem clara.
5. Executar `git push origin main`.
6. Aguardar o Vercel finalizar.
7. Verificar `https://visionmovv.vercel.app/`.
8. Informar o commit, os testes realizados e qualquer limitacao restante.

Nunca afirmar que a versao esta publicada sem verificar o deploy real.

## Primeira mensagem recomendada em um computador novo

Use:

> Leia integralmente o AGENTS.md e os arquivos indicados nele. Confirme a branch e o estado do Git, sincronize com a main e faca somente uma inspecao inicial. Nao altere nem publique nada ate eu enviar o primeiro pedido.
