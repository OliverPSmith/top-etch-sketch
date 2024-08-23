const gridContainer = document.querySelector('#grid-container');
const gridSizeBtn = document.querySelector('#grid-size');

let currentColor = 'crimson';

let gridSize = 16;
let containerSize = 500;

function createGrid () {
    const squareSize = containerSize / gridSize;
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
    
        for (let i = 0; i < gridSize; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            row.appendChild(square);
    
            square.addEventListener('mouseover', () => {
                square.style.background = currentColor;
            });
        }
    
        gridContainer.appendChild(row);
    }
}

createGrid();



const gridSlider = document.querySelector('#gridSlider');
const sliderNum = document.querySelector('#sliderNum');
sliderNum.textContent = gridSize;

function changeGridSize () {
    const rows = document.querySelectorAll('.row');
    rows.forEach((rowLine) => {
        gridContainer.removeChild(rowLine);
    })
    sliderNum.textContent = gridSlider.value;
    gridSize = gridSlider.value;
    createGrid();
}

gridSlider.oninput = () => {
    changeGridSize();
}

