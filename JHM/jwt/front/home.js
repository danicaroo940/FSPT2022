// eslint-disable-next-line no-unused-vars
function exit(e) {
  sessionStorage.removeItem('token');
  window.location.pathname = './login';
}

async function getUsers(token) {
  const response = await fetch('http://localhost:3000/users/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });

  return await response.json();
}

async function printUsers() {
  const users = await getUsers(sessionStorage.token);
  console.log(users);
}

printUsers();