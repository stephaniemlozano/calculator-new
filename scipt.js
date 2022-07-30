const display = document.querySelector('.display').innerHTML
const firstNumber = document.querySelector('.first-num').innerHTML
const secondNumber = document.querySelector('.second-num').innerHTML
const divOperator = document.querySelector('.operator').innerHTML

const clicked = true

const showDisplay = (number) => {
  if (!clicked) {
    if (document.querySelector('.first-num').innerHTML >= '0') {
      document.querySelector('.first-num').innerHTML = number
    } else {
      document.querySelector('.first-num').innerHTML += number
    }
  } else {
    if (document.querySelector('.second-num').innerHTML >= '0') {
      document.querySelector('.second-num').innerHTML = number
    } else {
      document.querySelector('.second-num').innerHTML += number
    }
  }
}

const operator = (operation) => {
  if (operation === '+') {
    document.querySelector('.display').innerHTML, operation
  }
  document.querySelector('.display').innerHTML = operation

  if (operation === '-') {
    document.querySelector('.display').innerHTML, operation
  }
  document.querySelector('.display').innerHTML = operation

  if (operation === '*') {
    document.querySelector('.display').innerHTML, operation
  }
  document.querySelector('.display').innerHTML = operation

  if (operation === '/') {
    document.querySelector('.display').innerHTML, operation
  }
  document.querySelector('.display').innerHTML = operation

  if (operation === '=') {
    document.querySelector('.display').innerHTML, operation
  }
  document.querySelector('.display').innerHTML = operation
}

const equalButton = (number1, operatorBtn, number2) => {
  let total = ''
  let result = `${number1} ${operatorBtn} ${number2} = ${total}`

  if (operatorBtn === '+') {
    total = number1 + number2
    document.querySelector('.display').innerHTML = result
  } else if (operatorBtn === '-') {
    total = number1 - number2
    document.querySelector('.display').innerHTML = result
  } else if (operatorBtn === '*') {
    total = number1 * number2
    document.querySelector('.display').innerHTML = result
  } else if (operatorBtn === '/') {
    total = number1 / number2
    document.querySelector('.display').innerHTML = result
  }
}

const acButton = (ac) => {
  if (ac === 'AC') {
    document.querySelector('.display').innerHTML = 0
  }
}

// const deleteButton = (del) => {
//     if (del === 'DEL') {
//         document.querySelector('.display').innerHTML.substring(0, document.querySelector('.display').innerHTML-1)
//     }
// }

/*Delete button, not working
need to add in calculation function and apply it
need to stop from allowing multiple decimals
loop for infinite calculations? */
