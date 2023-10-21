const display = document.querySelector('.display .o')
const numbers = document.querySelectorAll('[data-number]')
const symbols = document.querySelectorAll('[data-operation]')
const equals  = document.querySelector('[data-equal]')
const allClear= document.querySelector('[data-allClear')

let firstNumber = 0

let secondNumber = 0

let firstcal = []

let operation 

let secondcal = []

let step = 0

let result = 0

numbers.forEach(button => {
    button.addEventListener('click', (e) => {
        display.innerHTML += e.target.innerHTML
        let val = e.target.innerHTML
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
})

symbols.forEach(sym => {
    sym.addEventListener('click', (e) => {
        step = 2;
        display.innerHTML += e.target.innerHTML
        let val = e.target.innerHTML
        operation = val
        console.log({ operation })
        if (operation) {
            if (operation === '-') {
                result = firstNumber - secondNumber
            } else if (operation === '+') {
                result = firstNumber + secondNumber
            } else if (operation === '*') {
                result = firstNumber * secondNumber
            } else if (operation === '/') {
                result = firstNumber / secondNumber
            }
            firstcal = [result]
            firstNumber = result;
            secondcal = [];
        }
    });
});



equals.addEventListener('click', (e) => {
    
    secondcal = []

    if (operation === '-') {
        result = firstNumber - secondNumber 
    }
     else if (operation === '*') {
        result = firstNumber * secondNumber
    } else if (operation === '+') {
        result = firstNumber + secondNumber
    } else if (operation === '/') {
        result = firstNumber / secondNumber
    }
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