let headtop = 20;
let headleft = 20;
let direction = "up";
let setIntervalid = null;

const boardel = document.getElementById("board");
const boardHeight = 400;
const boardWidth = 400;

function render() {
  let snakeHtml = `<div id="Snake" class="Snake" style="top: ${headtop}px; left:${headleft}px"></div>`;
  boardel.innerHTML = snakeHtml;
}

function goUp() {
  headtop -= 20;
  if (headtop < 0) {
    headtop = boardHeight - 20;
  }
  render();
}

function goDown() {
  headtop += 20;
  if (headtop >= boardHeight) {
    headtop = 0;
  }
  render();
}

function goleft() {
  headleft -= 20;
  if (headleft < 0) {
    headleft = boardWidth - 20;
  }
  render();
}

function goRight() {
  headleft += 20;
  if (headleft >= boardWidth) {
    headleft = 0;
  }
  render();
}

function changeDirection(newDirection) {
  if (direction === "up" || direction === "down") {
    if (newDirection === "left" || newDirection === "right") {
      direction = newDirection;
    }
  } else if (direction === "left" || direction === "right") {
    if (newDirection === "up" || newDirection === "down") {
      direction = newDirection;
    }
  }
}

function startGame() {
  if (!setIntervalid) setIntervalid = setInterval(loopGame, 800);
}

function pauseGame() {
  clearInterval(setIntervalid);
  setIntervalid = null;
}

function restartGame() {
  headtop = 20;
  headleft = 20;
  direction = "up";
  pauseGame();
  render();
}

function loopGame() {
  switch (direction) {
    case "up":
      goUp();
      break;
    case "down":
      goDown();
      break;
    case "left":
      goleft();
      break;
    case "right":
      goRight();
      break;
  }
}

function keyControl(event) {
  const keyboard = event.key;
  if (keyboard === "s") {
    startGame();
  } else if (keyboard === "p") {
    pauseGame();
  } else if (keyboard === "r") {
    restartGame();
  } else if (keyboard === "ArrowUp") {
    changeDirection("up");
  } else if (keyboard === "ArrowDown") {
    changeDirection("down");
  } else if (keyboard === "ArrowRight") {
    changeDirection("right");
  } else if (keyboard === "ArrowLeft") {
    changeDirection("left");
  }
}

document.addEventListener("keydown", keyControl);
render();
