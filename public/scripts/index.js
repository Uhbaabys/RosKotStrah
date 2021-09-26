document.addEventListener('DOMContentLoaded', function (event) {
  const form = document.getElementById('regForms');
  const loginField = document.getElementById('loginField');
  const passwordField = document.getElementById('passwordField');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    console.log(loginField.value, passwordField.value);
    fetch('http://localhost:3000/', {
      method: 'POST',
      mode: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: loginField.value,
        password: passwordField.value,
      }),
    });
  });
});
