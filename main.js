const randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber)
let xAttempts = 1
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

function handleClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add('hide');
    screen2.classList.remove('hide');

    document.querySelector('.screen2 h2').innerText = `acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ""
  xAttempts++
}
function handleReset() {
  screen1.classList.remove('hide');
  screen2.classList.add('hide');
  xAttempts = 1;
}
btnTry.addEventListener('click', handleClick);
btnReset.addEventListener('click', handleReset);