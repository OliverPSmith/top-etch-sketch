
const gridContainer = document.querySelector('#grid-container');
const rainbowBtn = document.querySelector('#rainbow-button');

let pixelNum = 16;
let containerSize = 500; 

const startColor = 'crimson';
let currentColor = 'crimson';
const randomColors = ['#ff3333', '#ff33ff', '#3399ff', '#33ffd6', 
                '#5cd65c', '#ccff33', '#ffbb33', '#ff6633'
];



function randomColor () {
    const randomNum = Math.floor(Math.random() * randomColors.length);
    currentColor = randomColors[randomNum];
}



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
                // randomColor();
                square.style.background = currentColor;
            });


            function rainbowCol () {
                square.addEventListener('mouseover', () => {
                    randomColor();
                 //  square.style.background = currentColor;
                });
            }
            rainbowBtn.addEventListener('click', rainbowCol);
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
    currentColor = startColor;
    createGrid();
}

gridSlider.oninput = () => {
    changeGridSize();
}

