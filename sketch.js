// The code generates 40 circles with random x and y values between 1 and 500,
// fill each circle with a random color,
// and display each circle for a quarter of a second before hiding it and displaying the next one:

// 1. Getting all the needed elements in javascript
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// 2. Defining a function randomColor that generates a random color in the hexadecimal format.
function randomColor() {
  return "#" + Math.floor(Math.random() * 16000000).toString(16);
}

// 3. Defining a function drawCircle that takes x and y as parameters
// and draws a circle with a radius of 100px at the specified x and y coordinates,
// filled with a random color.
// Using the clearRect method to clear the canvas before drawing each circle.
function drawCircle(x, y) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 100, 0, 2 * Math.PI);
  ctx.fillStyle = randomColor();
  ctx.fill();
  ctx.stroke();
}

// 4. Defining a function displayCircles that loops 40 times and sets a timeout of 250 * i milliseconds for each iteration. The setTimeout function calls the drawCircle function with random x and y values between 1 and 400, and passes the current iteration number as the third argument.
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

// 5. Calling the displayCircles function to display the circles. Each circle will be displayed for a quarter of a second before hiding it and displaying the next one
displayCircles();
