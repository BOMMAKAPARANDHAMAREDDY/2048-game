let sum = 0;
let score = 0;
let highScore = 0;

function getRandomNumber() {
  return Math.random() < 0.75 ? 2 : 4;
}

function gameOver() {
  window.location.href = "./gameover.html";
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
  const highScoreElement = document.getElementById("highScore");
  localStorage.setItem("score", sum);
  const storedHighScore = localStorage.getItem("highScore");
  const storedScore = parseInt(localStorage.getItem("score")) || 0;
  const storedHighScorePe = parseInt(storedHighScore) || 0;
  currentScore.textContent = storedScore;

  if (storedScore > storedHighScorePe) {
    localStorage.setItem("highScore", storedScore);
    highScoreElement.textContent = storedScore;
  } else {
    highScoreElement.textContent = storedHighScorePe;
  }
}

let storedHighScore = localStorage.getItem("highScore") || 0;
document.getElementById("highScore").textContent = storedHighScore;

 document.addEventListener("keydown", function (event) {
  event.preventDefault();
  const direction = event.key;
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(direction)) {
    moveTiles(direction);
  }

  function moveUp() {
    for (let col = 1; col <= 4; col++) {
      for (let row = 2; row <= 4; row++) {
        let currentTile = document.querySelector(`.block[data-row="${row}"][data-column="${col}"]`);
        if (currentTile.dataset.value != "0") {
          let newRow = row;
          while (newRow > 1) {
            let upTile = document.querySelector(`.block[data-row="${newRow - 1}"][data-column="${col}"]`);
            if (upTile.dataset.value == "0") {
              upTile.textContent = currentTile.textContent;
              upTile.dataset.value = currentTile.dataset.value;
              currentTile.textContent = "";
              currentTile.dataset.value = "0";
              newRow--;
            } else if (upTile.dataset.value == currentTile.dataset.value) {
              upTile.textContent = 2 * (currentTile.dataset.value);
              upTile.dataset.value = upTile.textContent;
              currentTile.textContent = "";
              currentTile.dataset.value = "0";
              sum += parseInt(upTile.dataset.value)
              updateScore();
              break;
            } else {
              break;
            }
          }
        }
      }
    }
  }

  function moveLeft() {
    for (let row = 1; row <= 4; row++) {
      for (let col = 2; col <= 4; col++) {
        let currentTile = document.querySelector(`.block[data-row="${row}"][data-column="${col}"]`);
        if (currentTile.dataset.value != "0") {
          let newCol = col;
          while (newCol > 1) {
            let leftTile = document.querySelector(`.block[data-row="${row}"][data-column="${newCol - 1}"]`);
            if (leftTile.dataset.value == "0") {
              leftTile.textContent = currentTile.textContent;
              leftTile.dataset.value = currentTile.dataset.value;
              currentTile.textContent = "";
              currentTile.dataset.value = "0";
              newCol--;
            } else if (leftTile.dataset.value == currentTile.dataset.value) {
              leftTile.textContent = 2 * (currentTile.dataset.value);
              leftTile.dataset.value = leftTile.textContent;
              currentTile.textContent = "";
              currentTile.dataset.value = "0";
              sum += parseInt(leftTile.dataset.value)
              updateScore();
              break;
            } else {
              break;
            }
          }
        }
      }
    }
  }

  function moveRight() {
    for (let row = 1; row <= 4; row++) {
      for (let col = 3; col >= 1; col--) {
        let currentTile = document.querySelector(`.block[data-row="${row}"][data-column="${col}"]`);
        if (currentTile.dataset.value != "0") {
          let newCol = col;
          while (newCol < 4) {
            let rightTile = document.querySelector(`.block[data-row="${row}"][data-column="${newCol + 1}"]`);
            if (rightTile.dataset.value == "0") {
              rightTile.textContent = currentTile.textContent;
              rightTile.dataset.value = currentTile.dataset.value;
              currentTile.textContent = "";
              currentTile.dataset.value = "0";
              newCol++;
            } else if (rightTile.dataset.value == currentTile.dataset.value) {
              rightTile.textContent = 2 * (currentTile.dataset.value);
              rightTile.dataset.value = rightTile.textContent;
              currentTile.textContent = "";
              currentTile.dataset.value = "0";
              sum += parseInt(rightTile.dataset.value)
              updateScore();
              break;
            } else {
              break;
            }
          }
        }
      }
    }
  }

  function moveDown() {
    for (let col = 1; col <= 4; col++) {
      for (let row = 3; row >= 1; row--) {
        let currentTile = document.querySelector(`.block[data-row="${row}"][data-column="${col}"]`);
        if (currentTile.dataset.value != "0") {
          let newRow = row;
          while (newRow < 4) {
            let downTile = document.querySelector(`.block[data-row="${newRow + 1}"][data-column="${col}"]`);
            if (downTile.dataset.value == "0") {
              downTile.textContent = currentTile.textContent;
              downTile.dataset.value = currentTile.dataset.value;
              currentTile.textContent = "";
              currentTile.dataset.value = "0";
              newRow++;
            } else if (downTile.dataset.value == currentTile.dataset.value) {
              downTile.textContent = 2 * (currentTile.dataset.value);
              downTile.dataset.value = downTile.textContent;
              currentTile.textContent = "";
              currentTile.dataset.value = "0";
            sum += parseInt(downTile.dataset.value)
              updateScore();
              break;
            } else {
              break;
            }
          }
        }
      }
    }
  }

  function canMove() {
    for (let row = 1; row <= 4; row++) {
      for (let col = 1; col <= 4; col++) {
        const currentTile = document.querySelector(`.block[data-row="${row}"][data-column="${col}"]`);
        if (currentTile.dataset.value == "0") {
          return true;
        } else {
          const rightNeighbourTile = document.querySelector(`.block[data-row="${row}"][data-column="${col + 1}"]`);
          const downNeighbourTile = document.querySelector(`.block[data-row="${row + 1}"][data-column="${col}"]`);
          if ((rightNeighbourTile && rightNeighbourTile.dataset.value === currentTile.dataset.value) ||
              (downNeighbourTile && downNeighbourTile.dataset.value == currentTile.dataset.value)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  function moveTiles(direction) {
    switch (direction) {
      case "ArrowUp":
        moveUp();
        break;
      case "ArrowLeft":
        moveLeft();
        break;
      case "ArrowRight":
        moveRight();
        break;
      case "ArrowDown":
        moveDown();
        break;
    }

    placeOnRandomTile();
    // updateScore();

  let canMove = false;
  for (let row = 1; row <= 4; row++) {
    for (let col = 1; col <= 4; col++) {
      const currentTile = document.querySelector(`.block[data-row="${row}"][data-column="${col}"]`);
      if (currentTile.dataset.value == "0") {
        canMove = true;
        break;
      } else {
        const rightNeighbourTile = document.querySelector(`.block[data-row="${row}"][data-column="${col + 1}"]`);
        const downNeighbourTile = document.querySelector(`.block[data-row="${row + 1}"][data-column="${col}"]`);
        if (rightNeighbourTile && rightNeighbourTile.dataset.value === currentTile.dataset.value) {
          canMove = true;
          break;
        } else if (downNeighbourTile && downNeighbourTile.dataset.value == currentTile.dataset.value) {
          canMove = true;
          break;
        }
      }
    }
  }

  if (!canMove) {
    gameOver();
  }
}
  });

startGame();
