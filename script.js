const GRID_WIDTH_HEIGHT = 700;

let grid = document.querySelector(".grid");
let slider = document.querySelector("#grid-size");
let gridSizeText = document.querySelector(".grid-size-text");
let colorPicker = document.querySelector(".color-picker");
let clearButton = document.querySelector(".clear");
let currentColor = "#0e1111";
let randomButton = document.querySelector(".random");
let fadeButton = document.querySelector(".fade");

let randomToggle = false;
let fadeToggle = false;

function load(gridSize){
    grid.textContent = ""; // clear grid
    for(let i = 0, j = gridSize * gridSize; i < j; i++){
        grid.appendChild(createBlock(gridSize));
    }
}
function createBlock(gridSize){
    let blockSize = (GRID_WIDTH_HEIGHT / gridSize) - 1;
    let block = document.createElement("div");
    block.style.cssText = `flex: 1 0 ${blockSize + "px"}; background-color: white; height: auto;`;
    return block;
}

let isDrawing = false;

grid.addEventListener("mousedown", (e) =>{
    if(e.buttons === 1){ // will only draw if its a left click
        isDrawing = true;
        e.preventDefault();
        e.target.style.backgroundColor = currentColor;
    }
})
grid.addEventListener("mouseover", e => {
    if(isDrawing && e.buttons === 1){
        e.target.style.backgroundColor = currentColor;
    }
})
grid.addEventListener("mouseup", e => {
    isDrawing = false;
})

slider.addEventListener("input", () => {
    gridSizeText.textContent = slider.value + "x" + slider.value;
    load(slider.value);
})

colorPicker.addEventListener("input", () => {
    currentColor = colorPicker.value;
})

clearButton.addEventListener("click", () => load(slider.value));

randomButton.addEventListener("click", () => {
    randomToggle = !randomToggle;
})
fadeButton.addEventListener("click", () => {
    fadeToggle = !fadeToggle;
})

load(20);