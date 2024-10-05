import './style.scss'

let firstNumber = null,
    secondNumber = null
let currentFunction

const handleFunction = (func) => {
    currentFunction = func
}

const addition = (firstNumber, secondNumber) => {
    return parseFloat(firstNumber) + parseFloat(secondNumber)
}

const substraction = (firstNumber, secondNumber) => {
    return parseFloat(firstNumber) - parseFloat(secondNumber)
}

const times = (firstNumber, secondNumber) => {
    return parseFloat(firstNumber) * parseFloat(secondNumber)
}

const divide = (firstNumber, secondNumber) => {
    return parseFloat(firstNumber) / parseFloat(secondNumber)
}

const calculatorKeyPadClearEntry = document.querySelector('.calculator__keyPad_clearEntry')
const calculatorKeyPadDelete = document.querySelector('.calculator__keyPad_delete')
const calculatorKayPadDivision = document.querySelector('.calculator__keyPad_division')
const calculatorKeyPadTimes = document.querySelector('.calculator__keyPad_times')
const calculatorKeyPadSubstraction = document.querySelector('.calculator__keyPad_subtraction')
const calculatorKeyPadAddition = document.querySelector('.calculator__keyPad_addition')
const calculatorKeyPadDot = document.querySelector('.calculator__keyPad_dot')
const calculatorKeyPadEquals = document.querySelector('.calculator__keyPad_equals')
const calculatorKeyPad0 = document.querySelector('.calculator__keyPad_0')
const calculatorKeyPad1 = document.querySelector('.calculator__keyPad_1')
const calculatorKeyPad2 = document.querySelector('.calculator__keyPad_2')
const calculatorKeyPad3 = document.querySelector('.calculator__keyPad_3')
const calculatorKeyPad4 = document.querySelector('.calculator__keyPad_4')
const calculatorKeyPad5 = document.querySelector('.calculator__keyPad_5')
const calculatorKeyPad6 = document.querySelector('.calculator__keyPad_6')
const calculatorKeyPad7 = document.querySelector('.calculator__keyPad_7')
const calculatorKeyPad8 = document.querySelector('.calculator__keyPad_8')
const calculatorKeyPad9 = document.querySelector('.calculator__keyPad_9')

const calculatorResultInput = document.querySelector('.calculator__result_input')

const calculatorKeyPadValues = [
    {
        value: 0,
        button: calculatorKeyPad0,
    },
    {
        value: 1,
        button: calculatorKeyPad1,
    },
    {
        value: 2,
        button: calculatorKeyPad2,
    },
    {
        value: 3,
        button: calculatorKeyPad3,
    },
    {
        value: 4,
        button: calculatorKeyPad4,
    },
    {
        value: 5,
        button: calculatorKeyPad5,
    },
    {
        value: 6,
        button: calculatorKeyPad6,
    },
    {
        value: 7,
        button: calculatorKeyPad7,
    },
    {
        value: 8,
        button: calculatorKeyPad8,
    },
    {
        value: 9,
        button: calculatorKeyPad9,
    },
]

calculatorKeyPadClearEntry.addEventListener('click', () => {
    calculatorResultInput.value = ''
    currentFunction = null
    firstNumber = null
    secondNumber = null
})

calculatorKeyPadDelete.addEventListener('click', () => {
    const currentInputValue = calculatorResultInput.value
    const newInputValue = currentInputValue.slice(0, currentInputValue.length - 1)

    calculatorResultInput.value = newInputValue
})

calculatorKeyPadAddition.addEventListener('click', () => {
    firstNumber = calculatorResultInput.value
    calculatorResultInput.value = ''

    handleFunction(addition)
})

calculatorKeyPadSubstraction.addEventListener('click', () => {
    firstNumber = calculatorResultInput.value
    calculatorResultInput.value = ''

    handleFunction(substraction)
})

calculatorKeyPadTimes.addEventListener('click', () => {
    firstNumber = calculatorResultInput.value
    calculatorResultInput.value = ''

    handleFunction(times)
})

calculatorKayPadDivision.addEventListener('click', () => {
    firstNumber = calculatorResultInput.value
    calculatorResultInput.value = ''

    handleFunction(divide)
})

calculatorKeyPadEquals.addEventListener('click', () => {
    secondNumber = calculatorResultInput.value

    if (secondNumber == '') {
        secondNumber = 0
    }

    const result = currentFunction(firstNumber, secondNumber)

    calculatorResultInput.value = result
})

calculatorKeyPadValues.forEach((elem) => {
    elem.button.addEventListener('click', () => {
        const currentInputValue = calculatorResultInput.value
        const newInputValue = currentInputValue + elem.value

        calculatorResultInput.value = newInputValue
    })
})

calculatorKeyPadDot.addEventListener('click', () => {
    const currentInputValue = calculatorResultInput.value
    const newInputValue = currentInputValue + '.'

    calculatorResultInput.value = newInputValue
})
