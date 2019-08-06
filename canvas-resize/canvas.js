const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.fillStyle = "rgba(255, 0, 0, 0.1)"; // Changing rect color
ctx.fillRect(100, 100, 50, 50); // drawing square - x, y, width, height

// Line
ctx.beginPath(); // Starting new path
ctx.moveTo(50, 300); // Starting xy coordinates
ctx.lineTo(300, 100); // Destination xy coordinates
ctx.lineTo(400, 300);
ctx.strokeStyle = "#fa34a3"; // Changing color for the line
ctx.stroke();

// Arc - Circle
for (let i = 0; i < 3; i++) {
  const x = Math.random() * window.innerWidth,
    y = Math.random() * window.innerHeight;

  ctx.beginPath(); // Seperating line - disconnecting
  ctx.arc(x, y, 30, 0, Math.PI * 2, false); //x, y, radius, startAngle, endAngle, drawCounterClockwise
  ctx.strokeStyle = 'blue';
  ctx.stroke();
}