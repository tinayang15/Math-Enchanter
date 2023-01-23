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
let score = 0

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
