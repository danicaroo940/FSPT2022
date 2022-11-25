
async function login(user) {
  const response = await fetch('http://localhost:3000/login', {
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
  console.log({username, password});
  const loginResponse = await login({username, password});
  const { token } = loginResponse;
  sessionStorage.token = token;
  console.log(sessionStorage.token);
  window.location.pathname = './home';
}
