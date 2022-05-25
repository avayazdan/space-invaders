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

// SHOOTER variables

let shooterIndex = 188
const audioShoot = new Audio('audio/shoot.mp3')

// adding SHOOTER

function drawShooter() {
  squares[shooterIndex].classList.add('shooter')
}
drawShooter()

// moving SHOOTER

function moveShooter(e) {
  console.log(e)
  switch (e.key) {
    case 'ArrowLeft':
      console.log('left arrow')
      if (shooterIndex > 182) {
        squares[shooterIndex].classList.remove('shooter')
        squares[shooterIndex - 1].classList.add('shooter')
        shooterIndex -= 1
      }
      break
    case 'ArrowRight':
      console.log('right arrow')
      if (shooterIndex < 195) {
        squares[shooterIndex].classList.remove('shooter')
        squares[shooterIndex + 1].classList.add('shooter')
        shooterIndex += 1
      }
      break
    case ' ':
      console.log('space bar')
      audioShoot.play()
      squares[shooterIndex - width].classList.add('bullet')
  }
}

document.addEventListener('keydown', moveShooter)

// SCORE variables

let score = 0
const scoreBoard = document.querySelector('#score')

// BULLET travel and SCORE FUNCTIONALITY

const bulletTravel = setInterval(() => {
  squares.forEach((square) => {
    if (
      square.classList.contains('bullet') &&
      square.classList.contains('alien')
    ) {
      square.classList.remove('bullet')
      square.classList.remove('alien')
      const squareNumber = parseInt(square.getAttribute('squareNumber'))
      aliens.splice(aliens.indexOf(squareNumber), 1)
      console.log(aliens)
      console.log(squareNumber)
      score += 10
      scoreBoard.textContent = score
    }
    if (square.classList.contains('bullet')) {
      const bulletIndex = squares.indexOf(square)
      if (bulletIndex > width) {
        squares[bulletIndex].classList.remove('bullet')
        squares[bulletIndex - width].classList.add('bullet')
      } else {
        squares[bulletIndex].classList.remove('bullet')
      }
    }
  })
}, 1000)
