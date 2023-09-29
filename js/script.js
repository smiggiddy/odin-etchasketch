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

let resetGrid = (event) => {
    lengthWidth = gridSize(event.target.value);
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

let grid = document.querySelector(".grid");
let lengthWidth = gridSize(9);

slider.addEventListener('mouseup', (event) => {
    resetGrid(event);
});

let drawListener = () => {
    let boxes = document.querySelectorAll('.eas');

    boxes.forEach(element => {
        element.addEventListener('mouseover', (event) => {
            event.target.style.background = 'black';
    });
});
}

drawGrid(lengthWidth);
drawListener();