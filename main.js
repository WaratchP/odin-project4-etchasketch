let resolution = 200;
const cellSize = 10;

let gridCell = [];
const body = document.querySelector('body');

const buttonReset = document.createElement('button');
buttonReset.textContent = 'Reset Grid';
buttonReset.classList.add('buttonReset');
buttonReset.onclick = () => resetGrid();

body.appendChild(buttonReset);

function generateGrid() {   
    let gridWidth = resolution/cellSize;
    let gridHeight = resolution/cellSize;
    const containerGrid = document.createElement('div');
    containerGrid.classList.add('containerGrid')
    body.appendChild(containerGrid);

    containerGrid.style.gridTemplateColumns = `repeat(${gridWidth}, 10px)`
    containerGrid.style.gridTemplateRows = `repeat(${gridHeight}, auto)`
    containerGrid.style.width = `${resolution}px`
    containerGrid.style.height = `${resolution}px`

    for (let i = 0; i < gridHeight; i++) {
        gridCell[i] = []
        for (let j = 0; j < gridWidth; j++) {
            let div;
            gridCell[i][j] = div = document.createElement('div');
            div.classList.add('grid');
            div.style.opacity = 1;
            div.addEventListener('mouseover', () => etch(i, j));
            // div.addEventListener('mouseleave', () => remove(i, j));
            containerGrid.appendChild(div)
        }
    }
}

function etch(i, j) {
    gridCell[i][j].style.opacity -= 0.1;
}

function remove(i, j) {
    gridCell[i][j].classList.remove('gridHover');
}

function resetGrid() {
    let containerGrid = document.querySelector('.containerGrid');
    body.removeChild(containerGrid);
    resolution = prompt('Please enter grid dimension (px): ', 200)
    generateGrid();
}

generateGrid();