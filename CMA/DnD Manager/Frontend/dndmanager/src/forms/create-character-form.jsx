import { useState } from 'react';
import { serverPost } from '../elements/fetch.js'

async function CreateCharacter(inputs) {
  const fetchToken = await serverPost('characters/create', inputs, sessionStorage.getItem('sessionToken'));
  if (fetchToken.status === 200) {console.log("Personaje creado.")}
  if (fetchToken.status === 400) {console.log("Error.")}
  if (fetchToken.status === 401) {console.log("No autorizado.")}
  return;
}

function CreateCharacterForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    CreateCharacter(inputs);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Datos del personaje</legend>
            <label>Nombre:
            <input 
              type="text" 
              name="charName" 
              value={inputs.charName || ""} 
              onChange={handleChange}
            />
            </label>
            <label>Sexo:
            <input 
              type="text" 
              name="charGender" 
              value={inputs.charGender || ""} 
              onChange={handleChange}
            />
            </label>
            <label>Clase:
            <select name="charClass" value={inputs.charClass || ""} onChange={handleChange}>
              <option value="Mage">Mago</option>
              <option value="Rogue">Pícaro</option>
              <option value="Warrior">Guerrero</option>
              <option value="Monk">Monje</option>
              <option value="Priest">Sacerdote</option>
              <option value="Paladin">Paladin</option>
              <option value="Hunter">Cazador</option>
              <option value="Druid">Druida</option>
            </select>
            </label>
          </fieldset>
          <button type="submit">Crear</button>
        </form>
      </div>
    </>
  )
}

export { CreateCharacterForm };