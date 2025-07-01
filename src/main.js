import { Canvg } from 'canvg';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

async function loadAndRenderSVG(path, x = 0, y = 0) {
  const response = await fetch(path);
  const svgText = await response.text();
  const v = Canvg.fromString(ctx, svgText);
  ctx.save();
  ctx.translate(x, y);
  await v.render();
  ctx.restore();
}

// Exemplo de carregamento dos gráficos principais
(async () => {
  await loadAndRenderSVG('assets/logo.svg', 350, 20);
  await loadAndRenderSVG('assets/player.svg', 100, 500);
  await loadAndRenderSVG('assets/enemy.svg', 600, 100);
  await loadAndRenderSVG('assets/bullet.svg', 120, 480);
})();

// Aqui você poderá adicionar o restante da lógica do jogo
