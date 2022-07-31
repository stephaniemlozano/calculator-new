let clicked = false

const showDisplay = (number) => {
  if (!clicked) {
    if (document.querySelector('.first-num').innerHTML >= "0") {
      document.querySelector('.first-num').innerHTML += number
    } else {
      document.querySelector('.first-num').innerHTML += number
    }
  } else {
    if (document.querySelector('.second-num').innerHTML >= "0") {
      document.querySelector('.second-num').innerHTML += number
    } else {
      document.querySelector('.second-num').innerHTML += number
    }
  }
}


const operator = (operation) => {
  clicked = true
  document.querySelector(".operator").innerHTML = operation
}
const equalButton = () => {
  let firstNumber = document.querySelector('.first-num').innerHTML
  let secondNumber = document.querySelector('.second-num').innerHTML
  let operator = document.querySelector(".operator").innerHTML
  let total = calculate(firstNumber, secondNumber, operator)
  let result = `${firstNumber} ${operator} ${secondNumber} = ${total}`
  document.querySelector(".result").innerHTML = result
}

const calculate = (firstNum, secondNum, operator) => {
  switch (operator) {
    case "+":
      return parseInt(firstNum) + parseInt(secondNum)
    case "-":
      return firstNum - secondNum
    case "*":
      return firstNum * secondNum
    case "/":
      return firstNum / secondNum
  }
}


const acButton = (ac) => {
  if (ac === 'AC') {
    document.querySelector('.display').innerHTML = 0
  }
}



/* Known bugs:
   - multiple decimals can be selected
   - first number does not reset
*/