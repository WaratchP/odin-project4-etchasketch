const resolution = [320,200];
const cellSize = 10;

const gridWidth = resolution[0]/cellSize;
const gridHeight = resolution[1]/cellSize;

const gridCell = [];
const body = document.querySelector('body');

const buttonReset = document.createElement('button');
buttonReset.textContent = 'Reset Grid';
buttonReset.classList.add('buttonReset');
body.appendChild(buttonReset);

const containerGrid = document.createElement('div');
containerGrid.classList.add('containerGrid')
body.appendChild(containerGrid);

containerGrid.style.gridTemplateColumns = `repeat(${gridWidth}, 10px)`
containerGrid.style.gridTemplateRows = `repeat(${gridHeight}, auto)`
containerGrid.style.width = `${resolution[0]}px`
containerGrid.style.height = `${resolution[1]}px`

for (let i = 0; i < gridHeight; i++) {
    gridCell[i] = []
    for (let j = 0; j < gridWidth; j++) {
        let div;
        gridCell[i][j] = div = document.createElement('div');
        div.classList.add('grid');
        div.addEventListener('mouseover', () => etch(i, j));
        // div.addEventListener('mouseleave', () => remove(i, j));
        containerGrid.appendChild(div)
    }
}

function etch(i, j) {
    gridCell[i][j].classList.add('gridHover');
}

function remove(i, j) {
    gridCell[i][j].classList.remove('gridHover');
}