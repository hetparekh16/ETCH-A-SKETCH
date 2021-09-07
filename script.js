const container = document.querySelector('.container');
const grayButton = document.createElement('button');
const resetButton = document.createElement('button');
const clearButton = document.createElement('button');
const colorButton = document.createElement('button');
const blackButton = document.createElement('button');
const gridSizeButton = document.createElement('button')
const buttonContainer = document.querySelector('.buttons')

function createDiv(rows, cols) {
    for (let i = 0; i < (rows * cols); i++) {
        let div = document.createElement('div');
        container.style.gridTemplateColumns = `repeat(${cols} , 1fr)`
        container.style.gridTemplateRows = `repeat(${rows} , 1fr)`
        container.appendChild(div).classList.add('box')
    }
}
createDiv(16, 16)

function grayColor() {
    const boxs = document.querySelectorAll('.box');
    grayButton.textContent = 'Gray'
    grayButton.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let ranNum = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${ranNum},${ranNum},${ranNum})`
        }))
    })

    buttonContainer.appendChild(grayButton).classList.add('btn')
}
grayColor()

function blackColor() {
    const boxs = document.querySelectorAll('.box');
    blackButton.textContent = 'Black'
    blackButton.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            box.style.background = `black`
        }))
    })

    buttonContainer.appendChild(blackButton).classList.add('btn')
}
blackColor()

function rgbColor() {
    const boxs = document.querySelectorAll('.box');
    colorButton.textContent = 'Color'
    colorButton.addEventListener('click', () => {
        boxs.forEach(box => box.addEventListener('mouseover', () => {
            let R = Math.floor(Math.random() * 255)
            let G = Math.floor(Math.random() * 255)
            let B = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${R},${G},${B})`
        }))
    })

    buttonContainer.appendChild(colorButton).classList.add('btn')
}
rgbColor()


function reSet() {
    const boxs = document.querySelectorAll('.box');
    boxs.forEach(box => box.remove())
}

function clear() {
    const boxs = document.querySelectorAll('.box');
    clearButton.textContent = 'Clear'
    clearButton.addEventListener('click', () => {
        boxs.forEach(box => box.style.background = `none`)
    })

    buttonContainer.appendChild(clearButton).classList.add('btn')
}
clear()

function reSize() {
    gridSizeButton.textContent = "Grid Size"
    gridSizeButton.addEventListener('click', () => {
        let sizeNo = parseInt(prompt('Enter the size of grid'))
        if (sizeNo === null || sizeNo < 1 || sizeNo === undefined) {
            reSet()
            createDiv(16, 16)
            blackColor()
            grayColor()
            rgbColor()
            clear()
        }
        else {
            reSet()
            createDiv(sizeNo, sizeNo)
            blackColor()
            grayColor()
            rgbColor()
            clear()

        }
    })
    buttonContainer.appendChild(gridSizeButton).classList.add('btn')

}
reSize()

