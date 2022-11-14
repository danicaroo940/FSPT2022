async function getAllWithoutToken() {
  await fetch('http://localhost:3000/users/all');
}

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

async function getAllWithToken(token) {
  const response = await fetch('http://localhost:3000/users/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });

  return await response.json();
}

async function main() {
  await getAllWithoutToken();

  const user = {
    username: 'valueOfTheInputUsername',
    password: 'valueOfTheInputPass'
  };

  const registerResponse = await register(user);
  console.log('registerResponse', registerResponse);

  const { token } = registerResponse;
  console.log('token', token);

  const users = await getAllWithToken(token);
  console.log(users);
}

main();
