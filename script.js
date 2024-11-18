let headtop = 40 ;
let headleft = 20 ;
let direction = "up" ;
function render(){
    let snakeHtml = `<div id="Snake" class="Snake" style="top: ${headtop}px; left:${headleft}px"></div>`
    const boardel = document.getElementById("board")
    boardel.innerHTML = snakeHtml
}
function goUp() {
    headtop= headtop - 20
    render()
    }
setInterval(goUp , 1000)
render()