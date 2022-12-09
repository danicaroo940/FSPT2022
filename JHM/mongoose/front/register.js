async function register(user) {
  const response = await fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
  });

  return await response.json();
}

// eslint-disable-next-line no-unused-vars
async function onClickHandler(e) {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const registerResponse = await register({ username, password });
  const { token } = registerResponse;
  sessionStorage.token = token;
  window.location.pathname = './home.html';
}
