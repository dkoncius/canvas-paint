// Remtasi: https://daily-dev-tips.com/posts/javascript-mouse-drawing-on-the-canvas/

// Canvas logic
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let coord = { x: 0, y: 0 };

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);

resize();

function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

function reposition(event) {
  coord.x = event.clientX;
  coord.y = event.clientY;
}

function start(event) {
  document.addEventListener("mousemove", draw);
  reposition(event);
}

function stop() {
  document.removeEventListener("mousemove", draw);
}

function draw(event) {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = currentColor;
  ctx.moveTo(coord.x, coord.y);
  reposition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}


// Find buttons and color input
const clearCanvas = document.getElementById("clearCanvas")
const colorPicker = document.getElementById("colorPicker")
let currentColor = "#FF6D60"


colorPicker.addEventListener("input", function(){
  // Change brash color
  currentColor = this.value

  // Change buttons color
  clearCanvas.style.background = currentColor
})


// Clear canvas
clearCanvas.addEventListener("click", function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})