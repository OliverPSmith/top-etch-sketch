const gridContainer = document.querySelector('#grid-container');

let currentColor = 'crimson';

let gridSize = 16;

function firstGrid () {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
    
        for (let i = 0; i < gridSize; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
    
            row.appendChild(square);
    
            square.addEventListener('mouseover', () => {
                square.style.background = currentColor;
            });
        }
    
        gridContainer.appendChild(row);
    }
}

firstGrid();

