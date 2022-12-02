import { useState, useEffect } from 'react';
import { verifyLogin } from '../logic/fetch.js';
import logo from '../icons/logo.svg';
import './login-form.scss';


function LoginForm() {
  const [inputs, setInputs] = useState({});
  const [login, setLogin] = useState({message:''});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await verifyLogin(inputs);
    setLogin(response);
    setInputs({});
  }

  return (
    <>
    <div className='LoginForm'>
      <img src={logo} alt="" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="userId">Usuario o Email: </label><br />
        <input
          id="userId"
          name="id"
          type="text"
          onChange={handleChange}
        /><br />
        <label htmlFor="userPassword">Contraseña: </label><br />
        <input 
          id="userPassword" 
          name="password" 
          type="password"
          onChange={handleChange}
        /><br />
        <button type="submit" >Acceder</button><br />
        <span>{login.message}</span>
      </form>
    </div>
    </>
  )
}

export { LoginForm };