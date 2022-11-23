async function serverPost(url, body, token) {
  const data = await customFetch(url, 'POST', body, token);
  return data;
}

async function serverGet(url, body, token) {
  const data = await customFetch(url, 'GET', body, token);
  return data;
}

async function customFetch(url, method, body, token) {
  const domain = 'http://localhost:3003/';
  const getUrl = domain + url;
  const config = {
    method: method,
    headers: {
      'content-type': 'application/json',
    }
  }

  if (method === ('POST' || 'PUT' || 'DELETE')) {config.body = JSON.stringify(body)}
  if (token !== (undefined || '')) {config.headers.authorization = token}

  const fetched = await fetch(getUrl, config);
  const status = fetched.status;
  const parsed = await fetched.json();
  const response = {status: status, data: parsed};
  return response;
}

async function verifyLogin(inputs) {
  let response;
  const fetchToken = await serverPost('login', inputs, '');
  if (fetchToken.status === 200) {
    sessionStorage.setItem('sessionToken', fetchToken.data.token);
    const fetchUser = await serverGet('users/'+inputs.id, '', fetchToken.data.token).then(res => res.data.username);
    response = {display:false, message:`Bienvenido ${fetchUser}`};
  }
  if (fetchToken.status === 400) {response = {display:true, message:'Introduzca usuario y contraseña.'}}
  if (fetchToken.status === 401) {response = {display:true, message: 'Usuario y/o contraseña incorrectos.'}}
  return response;
}

export { serverPost, serverGet, verifyLogin };