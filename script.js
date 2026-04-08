const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const checkboxAgreement = document.getElementById('agreement');
const submitButton = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const form = document.getElementById('evaluation-form');

function getAnswers() {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const subjects = document.querySelectorAll('.subject:checked');
  const selectedSubjects = Array.from(subjects).map((subject) => subject.value).join(', ');
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const observation = document.getElementById('textarea').value;

  return { name, lastName, email, house, family, selectedSubjects, rate, observation };
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const answers = getAnswers();

  form.innerHTML = `
  <p>Nome: ${answers.name} ${answers.lastName}</p>
  <p>Email: ${answers.email}</p>
  <p>Casa: ${answers.house}</p>
  <p>Família: ${answers.family}</p>
  <p>Matérias: ${answers.selectedSubjects}</p>
  <p>Avaliação: ${answers.rate}</p>
  <p>Observações: ${answers.observation}</p>`;
});

textarea.addEventListener('input', () => {
  const remainingCharacters = 500 - textarea.value.length;
  counter.textContent = remainingCharacters;
});

checkboxAgreement.addEventListener('change', () => {
  submitButton.disabled = !checkboxAgreement.checked;
});

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
