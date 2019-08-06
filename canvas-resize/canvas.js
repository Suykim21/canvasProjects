const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
// ctx.fillStyle = "rgba(255, 0, 0, 0.1)"; // Changing rect color
// ctx.fillRect(100, 100, 50, 50); // drawing square - x, y, width, height

// // Line
// ctx.beginPath(); // Starting new path
// ctx.moveTo(50, 300); // Starting xy coordinates
// ctx.lineTo(300, 100); // Destination xy coordinates
// ctx.lineTo(400, 300);
// ctx.strokeStyle = "#fa34a3"; // Changing color for the line
// ctx.stroke();

// // Arc - Circle
// for (let i = 0; i < 3; i++) {
//   const x = Math.random() * window.innerWidth,
//     y = Math.random() * window.innerHeight;

//   ctx.beginPath(); // Seperating line - disconnecting
//   ctx.arc(x, y, 30, 0, Math.PI * 2, false); //x, y, radius, startAngle, endAngle, drawCounterClockwise
//   ctx.strokeStyle = 'blue';
//   ctx.stroke();
// }

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }

  draw() {
    ctx.beginPath(); // Seperating line - disconnecting
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); //x, y, radius, startAngle, endAngle, drawCounterClockwise
    ctx.strokeStyle = 'blue';
    ctx.stroke();
  }

  update() {
    // When it reaches the edge move to opposite direction vertically/horizontally
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    // Direction change
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

let circleArr = [];

for (let i = 0; i < 100; i++) {
  let radius = 30,
    // Not to get caught on the edge of the screen
    x = Math.random() * (innerWidth - radius * 2) + radius,
    y = Math.random() * (innerHeight - radius * 2) + radius,
    dx = (Math.random() - 0.5) * 8,
    dy = (Math.random() - 0.5) * 8;

  circleArr.push(
    new Circle(x, y, dx, dy, radius)
  );
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight); // clear xy start to xy end

  for (let i = 0; i < circleArr.length; i++) {
    circleArr[i].update();
  }
}

animate();