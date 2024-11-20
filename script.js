let headtop = 20;
let headleft = 20;
let direction = "up";
let setIntervalid = null;
function render() {
  let snakeHtml = `<div id="Snake" class="Snake" style="top: ${headtop}px; left:${headleft}px"></div>`;
  const boardel = document.getElementById("board");
  boardel.innerHTML = snakeHtml;
}
function goUp() {
  headtop = headtop - 30;
  render();
}
function goleft() {
  headleft = headleft - 30;
  render();
}
function goDown() {
  headtop = headtop + 30;
  render();
}
function goRight() {
  headleft = headleft + 30;
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
  if (!setIntervalid) setIntervalid = setInterval(loopGame, 100);
}
function pauseGame() {
  clearInterval(setIntervalid);
  setIntervalid = null;
}
function restartGame() {
  setIntervalid = null;
  headtop = 20;
  headleft = 20;
}
function loopGame() {
  switch (direction) {
    case "up":
      goUp();
      break;
    case "left":
      goleft();
      break;
    case "right":
      goRight();
      break;
    case "down":
      goDown();
      break;
  }
}
function keyControl(event) {
  const keyboard = event.key;
  if (keyboard == "ArrowUp") {
    changeDirection("up");
  } else if (keyboard == "ArrowDown") {
    changeDirection("down");
  } else if (keyboard == "ArrowRight") {
    changeDirection("right");
  } else if (keyboard == "ArrowLeft") {
    changeDirection("left");
  }
  console.log(event);
}
document.addEventListener("keydown", keyControl);
render();
