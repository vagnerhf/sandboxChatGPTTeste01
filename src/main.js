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

let gameState = 'title'; // 'title' ou 'playing'

async function drawTitleScreen() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  await loadAndRenderSVG('assets/logo.svg', canvas.width / 2 - 50, 40);
  ctx.fillStyle = 'white';
  ctx.font = '20px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('Use as setas para mover e espa\u00e7o para atirar', canvas.width / 2, 300);
  ctx.fillText('Pressione Enter para iniciar', canvas.width / 2, 340);
  ctx.fillText('Pressione Esc para voltar para esta tela', canvas.width / 2, 380);
}

async function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  await loadAndRenderSVG('assets/player.svg', 100, 500);
  await loadAndRenderSVG('assets/enemy.svg', 600, 100);
  await loadAndRenderSVG('assets/bullet.svg', 120, 480);
}

async function startGame() {
  gameState = 'playing';
  await drawGame();
}

async function stopGame() {
  gameState = 'title';
  await drawTitleScreen();
}

async function handleKeyDown(e) {
  if (gameState === 'title' && e.key === 'Enter') {
    await startGame();
  } else if (gameState === 'playing' && e.key === 'Escape') {
    await stopGame();
  }
}

document.addEventListener('keydown', handleKeyDown);

(async () => {
  await drawTitleScreen();
})();

// Aqui você poderá adicionar o restante da l\u00f3gica do jogo
