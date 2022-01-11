const getEmail = document.querySelector('#loginEmail')
const getPass = document.querySelector('#loginPass')
const sendBtn = document.querySelector('.getBtn')

function loginTest() {
  event.preventDefault()
  if(getEmail.value == "tryber@teste.com" && getPass.value == '123456') {
    alert('Olá, Tryber!')
  } else {
    alert('Email ou senha inválidos.')
  }
}

sendBtn.addEventListener('click', loginTest)