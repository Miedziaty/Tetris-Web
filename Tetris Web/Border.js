//Border.js

// Function to draw a border around the canvas

class Board {
    constructor(w, h) {
        this.boardWidth = w;
        this.boardHeight = h;
        this.well = Array.from({ length: w }, () => Array(h).fill(0));
    }

    addBlock(block) {
        block.getPoints().forEach(point => {
            if (point.x >= 0 && point.x < this.boardWidth && point.y >= 0 && point.y < this.boardHeight) {
                this.well[point.x][point.y] = 1;
            }
        });
    }

    removeBlock(block) {
        block.getPoints().forEach(point => {
            if (point.x >= 0 && point.x < this.boardWidth && point.y >= 0 && point.y < this.boardHeight) {
                this.well[point.x][point.y] = 0;
            }
        });
    }

    drawBoard() {
        for (let i = 0; i < 3; i++) {
            console.log('\n');
        }
        for (let i = 0; i < this.boardHeight; i++) {
            let row = '                    ##';
            for (let j = 0; j < this.boardWidth; j++) {
                row += this.well[j][i] === 1 ? '[]' : '  ';
            }
            row += `## ${this.boardHeight - i}`;
            console.log(row);
        }

        let bottomRow = '                    ';
        for (let i = 0; i < this.boardWidth + 2; i++) {
            bottomRow += '##';
        }
        console.log(bottomRow);

        for (let i = 0; i < 3; i++) {
            console.log('\n');
        }
    }

    clearWell() {
        for (let i = 0; i < this.boardHeight; i++) {
            let fullLine = true;
            for (let j = 0; j < this.boardWidth; j++) {
                if (this.well[j][i] !== 2) {
                    fullLine = false;
                    break;
                }
            }
            if (fullLine) {
                for (let k = i; k > 0; k--) {
                    for (let j = 0; j < this.boardWidth; j++) {
                        this.well[j][k] = this.well[j][k - 1];
                    }
                }
                for (let j = 0; j < this.boardWidth; j++) {
                    this.well[j][0] = 0;
                }
            }
        }
    }

    updateWell() {
        console.log("\033[4;1H");

        for (let i = 0; i < this.boardHeight; i++) {
            let row = '                    ##';
            for (let j = 0; j < this.boardWidth; j++) {
                if (this.well[j][i] === 1) {
                    row += '()';
                } else if (this.well[j][i] === 2) {
                    row += '[]';
                } else {
                    row += '  ';
                }
            }
            row += `## ${this.boardHeight - i}`;
            console.log(row);
        }

        let bottomRow = '                    ';
        for (let i = 0; i < this.boardWidth + 2; i++) {
            bottomRow += '##';
        }
        console.log(bottomRow);
    }

    checkCollision(block) {
        return block.getPoints().some(point =>
            point.x < 0 || point.x >= this.boardWidth ||
            point.y < 0 || point.y >= this.boardHeight ||
            this.well[point.x][point.y] === 2
        );
    }

    lockBlock(block) {
        block.getPoints().forEach(point => {
            if (point.x >= 0 && point.x < this.boardWidth && point.y >= 0 && point.y < this.boardHeight) {
                this.well[point.x][point.y] = 2;
            }
        });
    }

    getWidth() {
        return this.boardWidth;
    }

    getHeight() {
        return this.boardHeight;
    }
}