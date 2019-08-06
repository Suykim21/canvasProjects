const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.fillRect(100, 100, 200, 200); // drawing square - x, y, width, height
