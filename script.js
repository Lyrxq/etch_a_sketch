let container = document.querySelector(".container");
let gridSize = 16;
container.style.width = "960px"
container.style.height = "960px"
const btn = document.querySelector(".btn");

makeGrid();

btn.addEventListener("click", (event) => {
    gridSize = prompt("What is the gridSize?");
    while ((gridSize < 1) || (gridSize > 100)){
        gridSize = prompt("What is the gridSize?");
    }
    container.innerHTML = '';
    makeGrid();
})

function makeGrid(){

    for (let i = 0; i < gridSize * gridSize; i++){

        const square = document.createElement('div');
        square.className = "square";
        square.style.opacity = 0;
        square.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "black";
            let currentOpacity = parseFloat(event.target.style.opacity) || 0;
            event.target.style.opacity = Math.min(currentOpacity + 0.1, 1);
        })
        square.style.width = `${parseInt(container.style.width) / gridSize}px`
        square.style.height = `${parseInt(container.style.height) / gridSize}px`
        container.appendChild(square);
    }
    

}


