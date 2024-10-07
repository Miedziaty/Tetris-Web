//Block.js

class Block {
    static Type = {
        I: 'I',
        J: 'J',
        L: 'L',
        O: 'O',
        S: 'S',
        T: 'T',
        Z: 'Z'
    };

    constructor(type, startX, startY) {
        this.type = type;
        this.points = [];
        this.initializePoints(startX, startY);
    }

    initializePoints(startX, startY) {
        this.points = [];
        switch (this.type) {
            case Block.Type.I:
                this.points = [{ x: startX, y: startY }, { x: startX, y: startY + 1 }, { x: startX, y: startY + 2 }, { x: startX, y: startY + 3 }];
                break;
            case Block.Type.J:
                this.points = [{ x: startX, y: startY }, { x: startX, y: startY + 1 }, { x: startX, y: startY + 2 }, { x: startX - 1, y: startY + 2 }];
                break;
            case Block.Type.L:
                this.points = [{ x: startX, y: startY }, { x: startX, y: startY + 1 }, { x: startX, y: startY + 2 }, { x: startX + 1, y: startY + 2 }];
                break;
            case Block.Type.O:
                this.points = [{ x: startX, y: startY }, { x: startX + 1, y: startY }, { x: startX, y: startY + 1 }, { x: startX + 1, y: startY + 1 }];
                break;
            case Block.Type.S:
                this.points = [{ x: startX, y: startY }, { x: startX + 1, y: startY }, { x: startX, y: startY + 1 }, { x: startX - 1, y: startY + 1 }];
                break;
            case Block.Type.T:
                this.points = [{ x: startX, y: startY }, { x: startX - 1, y: startY + 1 }, { x: startX, y: startY + 1 }, { x: startX + 1, y: startY + 1 }];
                break;
            case Block.Type.Z:
                this.points = [{ x: startX, y: startY }, { x: startX - 1, y: startY }, { x: startX, y: startY + 1 }, { x: startX + 1, y: startY + 1 }];
                break;
        }
    }

    moveLeft() {
        this.points.forEach(point => {
            point.x -= 1;
        });
    }

    moveRight() {
        this.points.forEach(point => {
            point.x += 1;
        });
    }

    moveDown() {
        this.points.forEach(point => {
            point.y += 1;
        });
    }

    moveUp() {
        this.points.forEach(point => {
            point.y -= 1;
        });
    }

    rotate() {
        const centerX = this.points[1].x;
        const centerY = this.points[1].y;

        this.points.forEach(point => {
            const x = point.x - centerX;
            const y = point.y - centerY;
            point.x = centerX - y;
            point.y = centerY + x;
        });
    }

    getPoints() {
        return this.points;
    }
}
