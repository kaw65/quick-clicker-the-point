function clicker() {
  var pts = document.getElementById("pontos")
  var clicker = document.getElementById("point")
  var positions = [100, 200, 1, 160, 80, -100]
  var nextpositionright = Math.floor(Math.random()*positions.length);
  clicker.style.right = `${nextpositionright}px`;
  var valuepts = pts.value + 1
  pts.innerHTML = `${0+1}`
  clicker.setAttribute("onclick","clicker2()");
}
function clicker2() {
  var pts = document.getElementById("pontos")
  var clicker = document.getElementById("point")
  var positions = [100, 200, 1, 160, 80, -100]
  var nextpositionright = positions[Math.floor(Math.random()*positions.length)];
  clicker.style.right = `${nextpositionright}px`;
    var valuepts = parseInt(pts.value, 10) + 1;
  pts.innerHTML = `${0+1}`;
  console.log(valuepts)
  clicker.setAttribute("onclick","clicker()")
}