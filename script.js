const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function handleEnter(event) {
  if (event.key === 'Enter') {
    loginButton.click();
  }
}

emailInput.addEventListener('keydown', handleEnter);
passwordInput.addEventListener('keydown', handleEnter);
