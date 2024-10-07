//Tetris.js

import { drawBorder } from "./border";

const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

canvas.width = 300;
canvas.height = 600;
const tileSize = 30;

drawBorder();
