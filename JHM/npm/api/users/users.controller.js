import { request, response } from "express";

const database = [
  {
    userName: 'edu',
    password: 'eduPass',
    token: '1234'
  },
  {
    userName: 'jona',
    password: 'jonaPass',
    token: '12345'
  },
  {
    userName: 'german',
    password: 'germanPass',
    token: '123456'
  },
  {
    userName: 'lau',
    password: 'lauPass',
    token: '1234567'

  }];
// {
//   id: '2',
//   name: 'German',
// },
// {
//   id: '3',
//   name: 'Dani',
// },
// {
//   id: '4',
//   name: 'Laura',
// },
// {
//   id: '5',
//   name: 'Alberto',
// },
// {
//   id: '6',
//   name: 'Edu',
// },
// {
//   id: '7',
//   name: 'Cristian',
// },
// {
//   id: '8',
// name: 'Charlotte',
//   }
// ];

function getById(req, res) {
  const { id } = req.params;
  const user = database.find((item) => item.id === id);
  res.json(user);
}

function getByName(req, res) {
  const { name } = req.params;
  const user = database.find((item) => item.name === name);
  res.json(user);
}

// function getAll(req,res){
//   const images = database
//   console.log(images)
// }

function loginUser(req, res) {
  const userPassword = req.body.password;
  const userName = req.body.username;
  for (let index = 0; index < database.length; index++) {
    if (
      userName === database[index].userName &&
      userPassword === database[index].password
    ) {
      // console.log('hola')
      res.send(database[index].token);
      return;
    }
  }
  res.send('no estas registrado');
}

function checkUser(username, password, token) {
  let authOk = false;
  for (let index = 0; index < database.length; index++) {
    // const author = request.header.authorization;
    // if(author === database[index].token){
    //   console.log('ljkkkkkkxxxxxxxxxxxxxxxx');
    // }
    if (
      username === database[index].userName &&
      password === database[index].password &&
      token === database[index].token

    ) {
      authOk = true;
      return authOk;
      // console.log('estas registrado')
    }
  }
}

function filterRouter(request,response){
  response.send('hola');
}

export { getById, getByName, loginUser, checkUser, filterRouter};

