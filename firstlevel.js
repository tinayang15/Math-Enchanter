//variables
let spaceTwo = document.querySelector('#two')
let spaceFive = document.querySelector('#five')
let levelOnescore = document.querySelector('#levelOneScore')
const resetButton = document.querySelector('.resetButton')
const nextLevel = document.querySelector('.nextButton')
let declareWinner = false
let inputValue = document.getElementById('answer')
let scoreDisplay = document.getElementById('levelOneScore')
const submitButton = document.querySelector('.submit')
let score = 0
//make randomized number function math.floor and add it to the spaces id 2 and 6
function randomNumbers() {
    return Math.floor(Math.random() * 9) + 0;
}

spaceTwo.innerText = randomNumbers()
spaceFive.innerText = randomNumbers()
let sum = (parseInt(spaceTwo.innerText) + parseInt(spaceFive.innerText))
//innerText not innerHTML

//reset button - check if button works
resetButton.addEventListener('click', () => resetGame());

function resetGame() {
    location.reload()
}

//winning condition
// I want this loop to keep running until they score 5 points
// let userInput = parseInt(inputValue.value)

submitButton.addEventListener('click', () => {
    checkWin()

})
//Check score function

const checkScore = () => {


}
// Check win function

const checkWin = () => {
    if (parseInt(inputValue.value) === sum) {
        score += 1;
        checkScore();
        scoreDisplay.innerText = score;
        spaceTwo.innerText = randomNumbers();
        spaceFive.innerText = randomNumbers();
        sum = (parseInt(spaceTwo.innerText) + parseInt(spaceFive.innerText))
        inputValue.value = '';
    } else {
        inputValue.value = '';
        alert('Wrong answer, please try again')
    }
}



