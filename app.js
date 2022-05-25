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

// movement variables

let moveRight = true
let direction = 1
let interval
let intervalSpeed = 500
const gameOverSound = new Audio('audio/gameover.mp3')
const mainSound = new Audio('audio/loop.mp3')
const bruhSound = new Audio('audio/bruh.mp3')


// moving & removing ALIENS


function removeAliens() {
  squares.forEach((square) => square.classList.remove('alien'))
}

function moveAliens() {
  const leftEdge = aliens[0] % width === 0
  const rightEdge = aliens[aliens.length - 1] % width === width - 1
  removeAliens()
  if (moveRight && rightEdge) {
    for (let i = 0; i < aliens.length; i++) {
      aliens[i] += width
      direction = -1
      moveRight = false
    }
  } else if (!moveRight && leftEdge) {
    for (let i = 0; i < aliens.length; i++) {
      aliens[i] += width
      direction = 1
      moveRight = true
    }
  } else {
    for (let i = 0; i < aliens.length; i++) {
      aliens[i] += direction
    }
  }
  drawAliens()
  if (aliens.some((alien) => alien > 182)) {
    if (aliens.some((alien) => alien > 182)) {
      gameOverSound.play()
      bruhSound.play()
      mainSound.pause()
      // gameOver()
      gameOverSound.addEventListener('ended', function () {
        gameOver()
      })
    }
  }
}

function startAlienLeft() {
  console.log('move left')
  interval = setInterval(function () {
    moveAliens(-1)
  }, intervalSpeed)
}
startAlienLeft()

// GAME OVER function 

function gameOver() {
  clearInterval(interval)
  const y = document.getElementById('gameover-screen')
  if (y.style.display === 'none') {
    y.style.display = 'block'
  } else {
    y.style.display = 'none'
  }
  setTimeout(() => {
    y.style.display = 'none'
    const aliens = [0, 2, 4, 6, 8, 10, 12]

    function drawAliens() {
      const squares = Array.from(document.querySelectorAll('.grid div'))
      aliens.forEach((alien) => squares[alien].classList.add('alien'))
    }
    drawAliens()
  }, 8000)
}
