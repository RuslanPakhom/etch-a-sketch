const container = document.querySelector('.container')
const clear = document.querySelector('#clear')
let n = 16 //default grid size
const gridSizeInput = document.querySelector('#size')
const gridSizeOutput = document.querySelector('#sizeOutput')

const gridWidth = parseInt(window.getComputedStyle(container).width)
const gridHeight = parseInt(window.getComputedStyle(container).height)

const color = document.querySelector('#color')
let colorRGB = '#ff0000'
color.addEventListener('input', (e) => {
    colorRGB = e.target.value
})

gridSizeInput.addEventListener('input', (e) => {
    const size = parseInt(e.target.value)
    gridSizeOutput.textContent = size + "x" + size
    removeGrid()
    createGrid(size)
})

clear.addEventListener('click', (e) => {
    clearGrid()
})


function createGrid(n){
    cellWidth = 100/n
    cellHeight = 100/n
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.width = cellWidth + "%"
            cell.style.height = cellHeight + "%"
            container.appendChild(cell);
        }
    }
    addListeners()
}

function addListeners(){
    const cells = document.querySelectorAll('.cell');

    cells.forEach((cell) => {
        cell.addEventListener('mouseover', (e) => {
            cell.style.backgroundColor = colorRGB
            console.log(e)
        })
    })
}

function clearGrid(){
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        if(cell.style.backgroundColor){
        cell.style.backgroundColor = '';
        }
    })
}

function removeGrid(){
   while(container.firstChild){
       container.removeChild(container.firstChild)
   }
}

createGrid(n)
