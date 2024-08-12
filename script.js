const GRID_WIDTH_HEIGHT = 700;

let grid = document.querySelector(".grid");

function load(gridSize){
    for(let i = 0, j = gridSize * gridSize; i < j; i++){
        grid.appendChild(createBlock(gridSize));
    }
}
function createBlock(gridSize){
    let blockSize = (GRID_WIDTH_HEIGHT / gridSize) - 1;
    let block = document.createElement("div");
    block.style.cssText = `flex: 1 0 ${blockSize + "px"}; background-color: black; height: auto;`;
    return block;
}

let isDrawing = false;

grid.addEventListener("mousedown", (e) =>{
    if(e.buttons === 1){ // will only draw if its a left click
        isDrawing = true;
        e.preventDefault();
        e.target.style.backgroundColor = "white";
    }
})
grid.addEventListener("mouseover", e => {
    if(isDrawing && e.buttons === 1){
        e.target.style.backgroundColor = "white";
    }
})
grid.addEventListener("mouseup", e => {
    isDrawing = false;
})

load(20);