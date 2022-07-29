const display = () => document.querySelector('.display').innerHTML
let firstNumber = document.querySelector('.first-num').innerHTML

let numberArray = []

const showDisplay = (number) => {
  if (document.querySelector('.display').innerHTML >= '0') {
    document.querySelector('.display').innerHTML = number
  } else {
    document.querySelector('.display').innerHTML += number
  }
}

const operator = (operation) => {
  if (operation === '+') {
    numberArray.push(document.querySelector('.display').innerHTMLtNumber, operation)
  }
  document.querySelector('.display').innerHTML = operation
  console.log(numberArray)

  if (operation === '-') {
    numberArray.push(document.querySelector('.display').innerHTMLtNumber, operation)
  }
  document.querySelector('.display').innerHTML = operation
  console.log(numberArray) 
  
  if (operation === '*') {
    numberArray.push(document.querySelector('.display').innerHTMLtNumber, operation)
  }
  document.querySelector('.display').innerHTML = operation
  console.log(numberArray)

  if (operation === '/') {
    numberArray.push(document.querySelector('.display').innerHTMLtNumber, operation)
  }
  document.querySelector('.display').innerHTML = operation
  console.log(numberArray)

  if (operation === '=') {
    numberArray.push(document.querySelector('.display').innerHTMLtNumber, operation)
  }
  document.querySelector('.display').innerHTML = operation
  console.log(numberArray)
}

const acButton = (ac) => {
  if (ac === 'AC') {
    numberArray.length = 0
    document.querySelector('.display').innerHTML = 0
  }
}


const deleteButton = (del) => {
    if (del === 'DEL') {
        document.querySelector('.display').innerHTML.substring(0, document.querySelector('.display').innerHTML-1)
    }
}

/*Delete button, not working
need to add in calculation function and apply it
need to stop from allowing multiple decimals
loop for infinite calculations? */
