import { Canvg } from 'canvg';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

async function loadAndRenderSVG(path, x, y) {
  const response = await fetch(path);
  const svgText = await response.text();
  const v = Canvg.fromString(ctx, svgText);
  await v.render();
}

// Exemplo de uso com o logo de assets
loadAndRenderSVG('assets/logo.svg');

// Aqui você poderá adicionar o restante da lógica do jogo
