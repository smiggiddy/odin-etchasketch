const GRID_START = 16;
let bgColor = 'black';

const gridSize = dimensions => {
    return dimensions;
}

function drawGrid(lengthWidth) {
    
    let length = lengthWidth;
    let width = lengthWidth;

    const totalDiv = length*width;
    /* Each column takes 1/width|length of the available width */
    const gridCSS = `
        width: calc(100% / ${length}); 
        height: calc(100% / ${width});
    `

    for (i=0; i < totalDiv; i++) {
        const div2 = document.createElement('div');
        div2.className = 'eas';
        div2.style.cssText = gridCSS;
        grid.append(div2);
    }
}

let resetGrid = (size) => {
    lengthWidth = gridSize(size);
    deleteGrid();
    drawGrid(lengthWidth);
    drawListener();
}

let deleteGrid = () => {
    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
}

let slider = document.querySelector(".slider");
let sliderLabel = document.querySelector('.slider-lbl');
let grid = document.querySelector(".grid");
let lengthWidth = gridSize(GRID_START);
let mouseDown = false;

// Buttons
const clearButton = document.querySelector('.clear-btn');
const eraserButton = document.querySelector('.eraser-btn');
const drawButton = document.querySelector('.draw-btn');
clearButton.onclick = () => resetGrid(slider.value);
eraserButton.onclick = () => bgColor = 'white';
drawButton.onclick = () => bgColor = 'black';

sliderLabel.textContent = `${slider.value} x ${slider.value}`;
slider.addEventListener('mouseup', (event) => {
    let gridSize = event.target.value;
    resetGrid(gridSize);
    sliderLabel.textContent = `${event.target.value} x ${event.target.value}`;
});

let drawListener = () => {
    let boxes = document.querySelectorAll('.eas');

    boxes.forEach(element => {
        element.addEventListener('mouseover', (event) => {
            if (mouseDown){
                event.target.style.background = bgColor;
            }
    });
    element.addEventListener('mousedown', event => {
        mouseDown = true
        event.target.style.background = bgColor;
    });
    element.addEventListener('mouseup', () => mouseDown = false);
});
}

drawGrid(lengthWidth);
drawListener();