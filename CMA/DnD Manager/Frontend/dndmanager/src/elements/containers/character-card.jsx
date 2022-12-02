const CharacterCard = (props) => {
  return(
    <>
      <div className="character-card flx row" key={props.id}>
        <div className="character-sprite"></div>
        <div className="flx col">
          <div>{props.name}</div>
          <input className='hp-bar' type="range" min='1' max='100'/>
          <input className='hp-bar' type="range" min='1' max='100'/>
          <div>Level {props.level}</div>
          <div>{props.class}</div>
        </div>
    </div>
    </>
  );
}

export { CharacterCard };