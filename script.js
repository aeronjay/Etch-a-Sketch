const GRID_WIDTH_HEIGHT = 700;

let grid = document.querySelector(".grid");
let slider = document.querySelector("#grid-size");
let gridSizeText = document.querySelector(".grid-size-text");
let colorPicker = document.querySelector(".color-picker");
let clearButton = document.querySelector(".clear");
let currentColor = "#0e1111";
let randomButton = document.querySelector(".random");
let fadeButton = document.querySelector(".fade");
let eraserButton = document.querySelector(".eraser");
let colorModeButton = document.querySelector(".colorMode");

let colorModeToggle = true;
let randomToggle = false;
let fadeToggle = false;
let eraserToggle = false;

function load(gridSize){
    grid.textContent = ""; // clear grid
    // for(let i = 0, j = gridSize * gridSize; i < j; i++){
    //     grid.appendChild(createBlock(gridSize));
    // }
    for(let i = 0; i < gridSize; i++){
        let row = document.createElement("div");
        row.style.cssText = "flex: 1; display: flex;"
        for(let j = 0; j < gridSize; j++){
            row.appendChild(createBlock(gridSize));
        }
        grid.appendChild(row);
    }
}
function createBlock(gridSize){
    let blockSize = (GRID_WIDTH_HEIGHT / gridSize);
    let block = document.createElement("div");
    block.style.cssText = `width: ${blockSize + "%"}; background-color: white; height: auto;`;
    return block;
}

let isDrawing = false;

grid.addEventListener("mousedown", (e) =>{
    if(e.buttons === 1 && colorModeToggle){ // will only draw if its a left click
        isDrawing = true;
        e.preventDefault();
        e.target.style.backgroundColor = currentColor;
    }else if(e.buttons === 1 && eraserToggle){
        isDrawing = true;
        e.preventDefault();
        e.target.style.backgroundColor = "white";
    }
})
grid.addEventListener("mouseover", e => {
    if(isDrawing && e.buttons === 1 && colorModeToggle){
        e.target.style.backgroundColor = currentColor;
    }else if(isDrawing && e.buttons === 1 && eraserToggle){
        e.target.style.backgroundColor = "white";
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
    randomButton.style.backgroundColor = "lime";
    eraserButton.style.backgroundColor = "#eee";
    colorModeButton.style.backgroundColor = "#eee";

    randomToggle = true;
    eraserToggle = false;
    colorModeToggle = false;
})

eraserButton.addEventListener("click", () => {
    eraserButton.style.backgroundColor = "lime";
    colorModeButton.style.backgroundColor = "#eee";
    randomButton.style.backgroundColor = "#eee";

    
    eraserToggle = true;
    colorModeToggle = false;
    randomToggle = false;
})
colorModeButton.addEventListener("click", () => {
    colorModeButton.style.backgroundColor = "lime";
    randomButton.style.backgroundColor = "#eee";
    eraserButton.style.backgroundColor = "#eee";

    colorModeToggle = true;
    eraserToggle = false;
    randomToggle = false;
})
fadeButton.addEventListener("click", () => {
    fadeToggle = !fadeToggle;
})

load(20);