//variables
let spaceTwo = document.querySelector('#two')
let levelOnescore = document.querySelector('#levelOneScore')
const resetButton = document.querySelector('.resetButton')
const nextLevel = document.querySelector('.nextLevel')
let declareWinner = false


//make randomized number function math.floor and add it to the spaces id 2 and 6
function randomNumbers () {
    return Math.floor(Math.random()*9)+0;
} 
spaceTwo.innerText = randomNumbers(0,9);
//innerHTML


// add point to score - have to answer 5 correct to go to next level

// winning condition
    //add invalid results alert too
    //compare input value to winning condition


//reset button - check if button works
resetButton.addEventListener('click', () => resetGame());

function resetGame () {
    location.reload()
}