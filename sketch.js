// declare any variables you need here.
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// write functions here that are called in your setup or draw function. please remove this one.
function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function drawCircle(x, y) {
  //call your functions and do your drawing here.
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 100, 0, 2 * Math.PI);
  ctx.fillStyle = randomColor();
  ctx.fill();
  ctx.stroke();
}

function displayCircles() {
  for (var i = 0; i < 40; i++) {
    setTimeout(
      function (i) {
        drawCircle(
          Math.floor(Math.random() * 500),
          Math.floor(Math.random() * 500)
        );
      },
      250 * i,
      i
    );
  }
}

displayCircles();
