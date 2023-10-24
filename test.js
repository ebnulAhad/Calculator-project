const display = document.querySelector('.display .o')
const digits = document.querySelector('[data-number]')
const operator = document.querySelector('[data-operation]')
const equals = document.querySelector('[data-equal]')
const allClear= document.querySelector('[data-allClear')

let firstNumber = 0

let secondNumber = 0

let firstcal = []

let operation 

let secondcal = []

let step = 0

let result = 0

function calculation() {
    if (operation) {
        if (operation === '-') {
            result = firstNumber - secondNumber;
        } else if (operation === '+') {
            result = firstNumber + secondNumber;
        } else if (operation === '*') {
            result = firstNumber * secondNumber;
        } else if (operation === '/') {
            result = firstNumber / secondNumber;
        }
        firstcal = [result];
        firstNumber = result;
        secondcal = [];
    }
}
    digits.addEventListener('click', (e) => {
        display.innerHTML += e.target.value
        let val = e.target.value
        if (step === 0 ) {
            firstcal.push(val)
            firstNumber = parseFloat(firstcal.join(''))
            console.log({firstNumber}) 
        } 
        else if (step === 2){
            secondcal.push(val)
            secondNumber = parseFloat(secondcal.join(''))
            console.log({secondNumber})
        }
    })



    operator.addEventListener('click', (e) => {
        calculation()
        step = 2;
        display.innerHTML += e.target.value
        let val = e.target.value
        operation = val
        console.log({ operation })
    });




equals.addEventListener('click', (e) => {
    secondcal = []
    calculation()
    display.innerHTML = result
    console.log(result)
    step = 0;
    operation = null
    firstcal = [result]
    firstNumber = result
    secondNumber = 0
})

allClear.addEventListener('click',(e) => {
    display.innerHTML = ''
	firstNumber = 0
	secondNumber = 0
	step = 0
	operation = null
	result = 0
	firstcal = []
	secondcal = []
})