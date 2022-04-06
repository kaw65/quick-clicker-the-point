var audio = new Audio("audio.mp3");
function playgame() {
 var logo = document.getElementById("logo");
 var botondesign1 = document.getElementById("playgamedesign");
 var playtext = document.getElementById("playgametext");
 var pts = document.getElementById("pts");
 var exit = document.getElementById("back");
 logo.style.display = "none";
 pts.style.display = "block";
 botondesign1.style.display = "none";
 playtext.style.display = "none";
 exit.style.display = "block";
 audio.play();
}
 function exit() {
   var exit = document.getElementById("back");
   audio.pause();
   audio.currentTime = 0;
   exit.style.display = "none";
   var logo = document.getElementById("logo");
 var botondesign1 = document.getElementById("playgamedesign");
 var playtext = document.getElementById("playgametext");
 var pts = document.getElementById("pts");
 logo.style.display = "block";
 botondesign1.style.display = "block";
 playtext.style.display = "block";
 pts.style.display = "none";
}