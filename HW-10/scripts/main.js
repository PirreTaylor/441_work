var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = 200;



function update(){
}

function animate(){
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, 800, 800);

  ctx.beginPath();
  ctx.moveto(100,400);
  ctx.arc(x, 200, 30, 0, Math.PI * 2, false);
  ctx.strokeStyle = "#663300";
  ctx.stroke();

  x += 1;
}
