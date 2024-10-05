const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

canvas.width = 300;
canvas.height = 600;
const tileSize = 30;

function drawGrid() {
    context.strokeStyle = '#000';
    for (let x = 0; x < canvas.width; x += tileSize) {
        for (let y = 0; y < canvas.height; y += tileSize) {
            context.strokeRect(x, y, tileSize, tileSize);
        }
    }
}

drawGrid();