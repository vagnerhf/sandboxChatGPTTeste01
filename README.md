# Projeto de Exemplo - Planet Patrol Clone

Este projeto é uma estrutura inicial para um jogo 2D rodando no navegador. Utiliza **canvg** para converter arquivos SVG em bitmaps a serem renderizados em um elemento `<canvas>`.

## Estrutura
- `index.html` – Página principal contendo o elemento `<canvas>`.
- `src/` – Código JavaScript do jogo (`main.js`).
- `assets/` – Recursos gráficos (exemplo: `logo.svg`, `player.svg`, `enemy.svg`, `bullet.svg`).

## Como executar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Abra o arquivo `index.html` em um servidor estático (por exemplo, utilizando `npx serve` ou `python -m http.server`) e acesse pelo navegador.

A partir desse ponto você pode expandir a lógica do jogo dentro de `src/main.js`.
