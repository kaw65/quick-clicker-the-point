const audio1 = new Audio("audio1game.mp3");
const audio2 = new Audio("audio1menu.mp3");
function playgame() {
 var logo = document.getElementById("logo");
 var botondesign1 = document.getElementById("playgamedesign");
 var playtext = document.getElementById("playgametext");
 var exit = document.getElementById("back");
 logo.style.display = "none";
 botondesign1.style.display = "none";
 playtext.style.display = "none";
 exit.style.display = "block";
 audio1.play();
 audio2.pause();
 audio2.currentTime = 0;
}
 function exit() {
   var exit = document.getElementById("back");
   audio2.play();
   audio1.pause();
   audio1.currentTime = 0;
   exit.style.display = "none";
   var logo = document.getElementById("logo");
 var botondesign1 = document.getElementById("playgamedesign");
 var playtext = document.getElementById("playgametext");
 logo.style.display = "block";
 botondesign1.style.display = "block";
 playtext.style.display = "block";
}
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
  },4000);
})
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
      audio2.play()
  },1000);
})