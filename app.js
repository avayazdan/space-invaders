// GRID variables

const myGrid = document.querySelector('.grid')
const width = 14
const height = 15

// creating GRID

for (let i = 0; i < width * height; i++) {
  const square = document.createElement('div')
  square.setAttribute('squareNumber', i)
  myGrid.appendChild(square)
}
const grid = document.querySelectorAll('.grid div')
console.log(grid)
const squares = Array.from(document.querySelectorAll('.grid div'))

console.log(squares)

// adding ALIENS

const aliens = [0, 2, 4, 6, 8, 10, 12]

function drawAliens() {
  aliens.forEach((alien) => squares[alien].classList.add('alien'))
}
drawAliens()
