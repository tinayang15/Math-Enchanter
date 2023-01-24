//my variables
let spaceOne = document.querySelector('#one')
let spaceTwo = document.querySelector('#two')
let spaceFive = document.querySelector('#five')
const resetButton = document.querySelector('.resetButton')
const nextLevel = document.querySelector('.nextButton')
let declareWinner = false
let inputValue = document.getElementById('answer')
let scoreDisplay = document.getElementById('levelTwoScore')
const submitButton = document.querySelector('.submit')
let livesDisplay = document.getElementById('levelTwoLives')
let score = 0
let lives = 3

//Randomized number function math.floor and add it to the spaces id 2 and 6
function randomSecondNum() {
    return Math.floor(Math.random() * 9) + 0;
}
function randomFirstNum() {
    return Math.floor(Math.random() * 9) + 1;
}
spaceOne.innerText = randomFirstNum()
spaceTwo.innerText = randomSecondNum()
spaceFive.innerText = randomSecondNum()
let firstNumber = `${spaceOne.innerText}${spaceTwo.innerText}`
let sum = (parseInt(firstNumber) + parseInt(spaceFive.innerText))

//reset button
resetButton.addEventListener('click', () => resetGame());

function resetGame() {
    location.reload()
}

//submitButton

submitButton.addEventListener('click', () => {
    checkWin()
})

//Check score function
const checkScore = () => {
    if (score < 7) {
        console.log('keep playing')
    } else if (score >= 7) {
        let declareWinner = true;
        nextLevel.classList.add('nextStyle')
        alert('Half-Blood Enchanter! Proceed to the last level.')
    }
}

// Check win function
const checkWin = () => {
    if (parseInt(inputValue.value) === sum) {
        score += 1;
        checkScore();
        scoreDisplay.innerText = score;
        spaceOne.innerText = randomFirstNum()
        spaceTwo.innerText = randomSecondNum()
        spaceFive.innerText = randomSecondNum()
        let firstNumber = `${spaceOne.innerText}${spaceTwo.innerText}`
        sum = (parseInt(firstNumber) + parseInt(spaceFive.innerText))
        inputValue.value = '';
    } else {
        inputValue.value = '';
        alert('It seems your wand is acting sizzly, please try again')
        lives -= 1;
        checkLives();
        livesDisplay.innerText = lives;
    }
}

//check lives
const checkLives = () => {
    if (lives >= 1) {
        console.log(`You have ${lives} lives left.`)
    } else if (lives <= 0) {
        alert('Game Over')
        resetGame()
    }
}

