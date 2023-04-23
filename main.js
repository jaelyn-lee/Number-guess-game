//get random number
// An user inserts a number and click Go!
//the user get the right number, print out 'You got it right!'
//If the random number < User number print 'Down!'
//If the random number > User number print 'Up!'
//If the user clicks a reset button, the game will be reset.
//If the users use 5 chances, the game will be over (The button turns to disable.)
//If the user put the number out of 1-100, let them know (Do not count this down)
//If the user put the number has already put, let them know (Do not count this down)

let computerNum = 0
let playButton = document.getElementById('play-button')
let userInput = document.getElementById('user-input')
let resultArea = document.getElementById('result-area')

playButton.addEventListener('click', play)


function getRandomNum () {
  computerNum = Math.floor (Math.random() * 100+1)
  console.log ("The answer is: ", computerNum)
}


function play () {
  let userValue = userInput.ariaValueNow
  if (userValue < computerNum) {
    resultArea.textContent('Up!!')
  } else if (userValue > computerNum) {
    resultArea.textContent ('Down!!')
  } else {
    resultArea.textContent ('You got it right!')
  }
}

getRandomNum()