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

// shooter variables

let shooterIndex = 188
const audioShoot = new Audio('audio/shoot.mp3')

// adding SHOOTER

function drawShooter() {
  squares[shooterIndex].classList.add('shooter')
}
drawShooter()

// moving shooter

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