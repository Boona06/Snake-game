let headtop = 65;
let headleft = 65;
let direction = "up";
let setIntervalid = null;
function render() {
  let snakeHtml = `<div id="Snake" class="Snake" style="top: ${headtop}px; left:${headleft}px"></div>`;
  const boardel = document.getElementById("board");
  boardel.innerHTML = snakeHtml;
}
function goUp() {
  headtop = headtop - 43.75;
  render();
}
function goleft() {
  headleft = headleft - 43.75;
  render();
}
function goDown() {
  headtop = headtop + 43.75;
  render();
}
function goRight() {
  headleft = headleft + 43.75;
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
  if (!setIntervalid) setIntervalid = setInterval(loopGame, 1000);
}
function pauseGame() {
  clearInterval(setIntervalid);
  setIntervalid = null;
}
function restartGame() {
  if ((setIntervalid = setInterval(loopGame, 500))) {
    setIntervalid = null;
    headtop = 40;
    headleft = 20;
  }
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
// function handlekey(event) {
// }
// document.addEventListener("keydown", handlekey);
render();
