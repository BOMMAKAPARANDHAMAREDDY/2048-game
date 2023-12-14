function getRandomNumber() {
    return Math.random() < 1 ? 2 : 4;
  }
  
  function startGame() {
    const blockContainer = document.querySelector(".blockContainer");
    for (let i = 1; i <= 4; i++) {
      for (let j = 1; j <= 4; j++) {
        const block = document.querySelector(`.block[data-row="${i}"][data-column="${j}"]`);
        block.textContent = "";
        block.dataset.value = 0;
      }
    }
    placeOnRandomTile();
  }
  
  function placeOnRandomTile() {
    const emptyBlocks = [];
    const blockContainer = document.querySelector(".blockContainer");
    for (let i = 1; i <= 4; i++) {
      for (let j = 1; j <= 4; j++) {
        const block = document.querySelector(`.block[data-row="${i}"][data-column="${j}"]`);
        if (block.dataset.value == "0") {
         emptyBlocks.push({ row: i, column: j });
        }
      }
    }
    const value = Math.floor(Math.random() * emptyBlocks.length);
    const randomBlock = emptyBlocks[value];
    const randomValue = getRandomNumber();
    const block = document.querySelector(`.block[data-row="${randomBlock.row}"][data-column="${randomBlock.column}"]`);
    block.textContent = randomValue;
    block.dataset.value = randomValue;
  }
  
  function updateScore() {
    const currentScore = document.getElementById("currentScore");
    const highScore = document.getElementById("highScore");
    const maxScore = parseInt(highScore.textContent);
    let sum = 0;
    const blocks = document.querySelectorAll(".block");
    for (let block of blocks) {
      sum += parseInt(block.dataset.value);
    }
    currentScore.textContent = sum;
    if (sum > maxScore) {
      highScore.textContent = sum;
    }
  }

  document.addEventListener("keydown", function(event){
    event.preventDefault();
    const direction = event.key;
    if(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(direction)) {
      moveTiles(direction)
    }

    function movingUp(){
      for(let col = 1; col <= 4; col++){
        for(let row = 1; row <=4; row++){
          
        }
      }
    }
  })
  startGame();