//my variables
let spaceOne = document.querySelector('#one')
let spaceTwo = document.querySelector('#two')
let spaceFour = document.querySelector('#four')
let spaceFive = document.querySelector('#five')
const resetButton = document.querySelector('.resetButton')
const nextLevel = document.querySelector('.nextButton')
let declareWinner = false
let inputValue = document.getElementById('answer')
let scoreDisplay = document.getElementById('levelThreeScore')
const submitButton = document.querySelector('.submit')
let livesDisplay = document.getElementById('levelThreeLives')
let lives = 3
let score = 0

//Randomized number function math.floor and add it to the spaces id 2 and 6
function randomFirstNum() {
    return Math.floor(Math.random() * 9) + 1;
} function randomSecondNum() {
    return Math.floor(Math.random() * 9) + 0;
}

spaceOne.innerText = randomFirstNum()
spaceTwo.innerText = randomSecondNum()
spaceFour.innerText = randomFirstNum()
spaceFive.innerText = randomSecondNum()
let firstNumber = `${spaceOne.innerText}${spaceTwo.innerText}`
let secondNumber = `${spaceFour.innerText}${spaceFive.innerText}`
let sum = (parseInt(firstNumber) + parseInt(secondNumber))

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
    if (score < 8) {
        console.log('keep playing')
    } else if (score >= 8) {
        let declareWinner = true;
        nextLevel.classList.add('nextStyle')
        alert('Congrats, you are now a Pure-Blood! Your next adventure awaits you (Update coming December 2023). Please feel free to retest your abilities as you wait.')
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
        spaceFour.innerText = randomFirstNum()
        spaceFive.innerText = randomSecondNum()
        firstNumber = `${spaceOne.innerText}${spaceTwo.innerText}`
        secondNumber = `${spaceFour.innerText}${spaceFive.innerText}`
        sum = (parseInt(firstNumber) + parseInt(secondNumber))
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