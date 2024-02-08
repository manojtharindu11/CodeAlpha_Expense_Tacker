const chart = document.querySelector(".chart");
const canvas = document.querySelector(".canvas");


canvas.width = 400;
canvas.height = 400;

const ctx = canvas.getContext("2d");

// ctx.arc(x, y, Radius, startAngle, endAngle, anticlockWise);

const radius = 100;

function updateChart(income, outcome) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let ratio = income / (income + outcome);

  drawCircle("rgb(130, 193, 4)", -1 * ratio, true);
  drawCircle("#f0624d", 1 - ratio, false);
}

function drawCircle(color, ratio, anticlockWise) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 20;
  ctx.beginPath();

  ctx.arc(
    canvas.width / 2,
    canvas.height / 2,
    radius,
    0,
    ratio * 2 * Math.PI,
    anticlockWise
  );

  ctx.stroke();

}
