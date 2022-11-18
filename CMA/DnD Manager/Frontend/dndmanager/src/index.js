import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.scss';

function Form() {
  const [inputs, setInputs] = useState({});
  const [card, setCards] = useState(cards);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const addCards = () => {
    const charID = card.length;
    const charName = inputs.charName;
    const charClass = inputs.charClass;
    const charObj = {"id": charID, "charName": charName, "charClass": charClass};
    setCards(values => ([...values, charObj]));
    console.log(card);
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
        <button type="submit" onClick={addCards}>Crear</button>
      </form>
    </div>
    <div>
      {card.map((values)=>(
        <div key={values.id}>{values.charName} {values.charClass}</div>
      ))}
    </div>
    </>
  )
}

const cards = [
  {
    id: 0,
    charName: "Jonas",
    charClass: "Mage"
  },
  {
    id: 1,
    charName: "Jason",
    charClass: "Bourne"
  }
]

function XHeader() {
  return <>Header</>
}

function XMain() {
  return (
    <>
      <div id="left-panel" className="flx-col left-panel">
        <Form />
      </div>
      <div id="right-panel" className="flx-col right-panel">

      </div>
    </>
  )
}

function XFooter() {
  return <>Footer</>
}

function Layout() {
  return (
    <>
      <header><XHeader /></header>
      <main><XMain /></main>
      <footer><XFooter /></footer>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Layout />);


