const backgroundSound = new Audio("./assets/gameover.mp3");
backgroundSound.play();

document.getElementsByClassName("restart"),onclick = () =>{
    window.location.href = "./game.html"
}

var score = localStorage.getItem("score")
var highScore = localStorage.getItem("highScore")

document.getElementById("currentScore").textContent = score
document.getElementById("highScore").textContent = highScore
