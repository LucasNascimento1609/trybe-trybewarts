const getEmail = document.querySelector('#loginEmail')
const getPass = document.querySelector('#loginPass')
const sendBtn = document.querySelector('.getBtn')
const btnEnviar = document.querySelector('#submit-btn')
const checkBox = document.querySelector('#agreement')

function loginTest() {
  event.preventDefault()
  if(getEmail.value == "tryber@teste.com" && getPass.value == '123456') {
    alert('Olá, Tryber!')
  } else {
    alert('Email ou senha inválidos.')
  }
}

sendBtn.addEventListener('click', loginTest)

function teste() {
  if(checkBox.checked == true) {
    btnEnviar.toggleAttribute('disabled')
  }
}

checkBox.addEventListener('click', teste)