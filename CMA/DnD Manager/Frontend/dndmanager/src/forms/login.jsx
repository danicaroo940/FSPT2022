import { useState, useEffect } from 'react';
import { verifyLogin } from '../elements/fetch.js';
import '../stylesheets/login-form.scss'

function LoginForm() {
  const [inputs, setInputs] = useState({});
  const [logged, setLogin] = useState({display:true, message:''});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await verifyLogin(inputs, logged);
    setLogin(response);
  }

  const handleLogout = () => {
    sessionStorage.removeItem('sessionToken');
    setLogin({display:true, message:''});
    setInputs({});
  }

  const handleResize = () => {
    if (window.innerWidth < 600) {
      console.log(window.innerWidth);
      console.log("Pequeño");
    } else {
      console.log(window.innerWidth);
      console.log("Grande");
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  if (!logged.display) {
    return (
      <>
      <div className='LoginForm-logged'>
        <p>{logged.message}</p>
        <button >Cuenta</button>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
      </>
    )
  }

  if (logged.display) {
    return (
      <>
      <div className='LoginForm-login'>
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
          <button type="submit" >Acceder</button>
          <p>{logged.message}</p>
        </form>
      </div>
      </>
    )
  }
}

export { LoginForm };