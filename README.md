# PROJECT 1 - SPACE INVADERS

![spae](https://user-images.githubusercontent.com/75817925/170392140-74fa34b6-51ee-4105-bd73-5caa5a51101a.png)

Deployed at: https://space-invaders-1337.netlify.app/ 

<i>(This project is not suitable for mobile devices)</i>

This project was built for project one of General Assembly's Full-Stack Software Engineering course. 
The project brief's focus was to create a single-page game using HTML, CSS and JavaScript. This project was representative of our first module.
The main focus for this project was to use the DOM and to create a game. 
For this project, we were given a list of games to choose from for inspiration. I decided to go for Space Invaders.


### Table of contents 

1. How it works
3. Build
4. Styling
5. Challenges and Wins
6. Future improvements

#### How it works

There are a row of aliens that move down in a synchronised motion towards the shooter (player), the shooter can press left and right arrow keys to move left and right, and spacebar to shoot. The shooter must hit each "block" of aliens twice for them to be completely removed or destroyed, in the context of the game. Once the aliens get to the bottom of the page, the player will lose and a losing sound will be played. The game keeps a track of the player's score - each successful hit equals 10 points. The game is one round, to play again the user must refresh the page. 

<i>Please note the readability of the instructions are skewed due to the image resolution.</i>

![dldl](https://user-images.githubusercontent.com/75817925/170390652-e33ad016-d015-43bc-b5b5-22214dc5a394.png)

#### Planning

Before building this project, I did some research on building a web game with Canva. I found that it was something I wanted to try in the future, however my tutors advised me to not utilise it this time as I had a short amount of time to build the game since I had lost one week of project time to Covid. I looked up different ways of creating grids, and other Space Invaders projects. For this project, I didn’t have much time to focus on pseudocode or sketches, so after a little bit of research, I dived straight into the build. 


#### Build

I wanted to have the aliens move downwards in a pattern, and I wanted them to only move within a frame. I knew the first step after creating the web page was to build a grid. The game mechanics heavily rely on the grid and won’t work without it. The aliens move to each DIV in the grid, which is set to an array. The main idea is that the aliens move in a pattern that corresponds to the elements of an array, for example, see in // adding ALIENS - the aliens are initially set to 0,2,4,6,8 and so on - they are set to specific DIV’s, or elements of the array, inside the grid. Then we are dynamically adding each alien with the drawAliens() function using the forEach array method, so for each square that is set to the variable ‘aliens’ we add a class of ‘alien’ via the DOM - which will make our aliens appear. 

```
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

```

The movement relies on the width of the grid, as shown below. The aliens will never leave the area outside the grid, as it has been set to the width of the grid itself. 

```
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
```

#### Styling

I wanted to keep the styling of this game very retro and simple, and it ended up being sort of an homage to the early days of the internet and old web pages, something I’ve always been passionate about and felt nostalgic for. I was inspired by pixel art, arcade games and 8bit music.


![gme](https://user-images.githubusercontent.com/75817925/170392166-0f9ef396-1c92-4e7b-af50-438a461274d1.png)


#### Challenges

There were many challenges during this project as I had Covid for the first week, and so I only had one week to complete it. 
In terms of technical challenges, a big one was music and autoplay. Originally, the sound would automatically start when the user would move their mouse, this was a way to bypass Chrome's rules on music not starting automatically on webpages for the user's comfort and safety. By using the mouse-move event listener, I was able to make the music somewhat play automatically, and then stop once the user lost the game. However, this did not always work, and Chrome would throw a different error - "the user failed to interact with the document first" - because of this, I decided to add a player, I also did this because it's somewhat more user-friendly and better to have the option there instead of it being played automatically. 


#### Wins

One of my wins was learning how to bypass a web browser feature that would scroll down the page when spacebar was pressed by the user.

```

document.onkeypress = function (e) {
  e = e || window.event
  var charCode = e.keyCode || e.whichf
  if (charCode === 32) {
    e.preventDefault()
    return false
  }
}

```


#### Future improvements 

The game is extremely simple and is missing a lot of functionality, thus I aim to add the following:

- Add starting and game over screen
- Add win function
- Add restart game when it ends functionality
- Make page responsive
- Small styling improvements

#### Key learnings / Main takeaways

I learnt a lot through this project. The main learning point for me was further understanding how the DOM works and using it practically. I also learnt a lot about potential browser limitations and how you can bypass them. 
