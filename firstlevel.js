let spaces = document.querySelectorAll('.space')
let levelOnescore = document.querySelector('#levelOneScore')
const resetButton = document.querySelector('.resetButton')
const nextLevel = document.querySelector('.nextLevel')
let declareWinner = 0

//make randomized number function math.floor

// winning condition
    //add invalid results alert too
//reset button
resetButton.addEventListener('click', () => resetGame());

function resetGame () {
    location.reload()
}