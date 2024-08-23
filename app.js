
const gridContainer = document.querySelector('#grid-container');

let pixelNum = 16;
let containerSize = 500; 

let currentColor = 'crimson';

function createGrid () {
    const squareSize = containerSize / pixelNum;
    for (let i = 0; i < pixelNum; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
    
        for (let i = 0; i < pixelNum; i++) {
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
sliderNum.textContent = pixelNum;

function changeGridSize () {
    const rows = document.querySelectorAll('.row');
    rows.forEach((rowLine) => {
        gridContainer.removeChild(rowLine);
    });
    sliderNum.textContent = gridSlider.value;
    pixelNum = gridSlider.value;
    createGrid();
}

gridSlider.oninput = () => {
    changeGridSize();
}

