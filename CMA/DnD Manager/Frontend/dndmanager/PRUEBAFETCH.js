async function customFetch(url, method, body, token) {
  const domain = 'http://localhost:3003/';
  const getUrl = domain + url;
  const config = {
    method: method,
    headers: {
      'accept': '*/*',
      'content-type': 'application/json'
    }
  }
  if (method === ('POST' || 'PUT' || 'DELETE')) {config.body = JSON.stringify(body)}
  if (token !== (undefined || '')) {config.headers.authorization = token.token}
  const response = await fetch(getUrl, config).then(res => res.json());
  return response;
}

async function serverPost(url, body, token) {
  try {
    const data = await customFetch(url, 'POST', body, token);
    console.log(`\n----- POST on /${url}: -----`, `${JSON.stringify(data)}`)
    return data;
  } catch (error) {
    return console.error("ERROR: ", error);
  }
}

async function serverGet(url, body, token) {
  try {
    const data = await customFetch(url, 'GET', body, token);
    console.log(`\n----- GET on /${url}: -----`, `${JSON.stringify(data)}`)
    return data;
  } catch (error) {
    return console.error("ERROR: ", error);
  }
}

const user = {"id": "admin", "password": "123456"}

async function main() {
  const token = await serverPost('login', user, '');
  const usersDb = await serverGet('users', '', token);
  console.log(usersDb);
}

main();