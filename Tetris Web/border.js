//border.js

// Function to draw a border around the canvas

export function drawBorder() {
    context.strokeStyle = '#000';  // Set the border color
    context.lineWidth = 5;         // Set the border thickness
    context.strokeRect(0, 0, canvas.width, canvas.height); // Draw the border around the canvas
}

