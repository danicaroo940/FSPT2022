import { useState, useEffect } from 'react';

function GetCharacters() {
  const [chars, setChars] = useState([]);
  const [update, setUpdate] = useState(false);

  const toggleShow = () => {
    setUpdate(prevState => !prevState);
  }

  useEffect(() => {
    async function fetchChars() {
      const characters = await serverGet('characters/userdata', '', sessionStorage.getItem('sessionToken'));
      if (update) {
        setChars(characters);
      }
      else {
        setChars([]);
      }
    };
    fetchChars();
  }, [update])

  return (
    <>
      <div>
      <input type="button" value="Mostrar" onClick={toggleShow} />
      {chars.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      </div>
    </>
  )
}

export {  };