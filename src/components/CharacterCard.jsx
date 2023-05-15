import React from "react";

const CharacterCard = ({ character }) => {

  return (
    <div className="character-card" style={{
      transform: `rotate(${character.rot}deg)`
    }}>
      <div className="character-border">
        <div className="character-item">
          <div
            className="character-img" >
                        <img src={character.img} className="Char-logo" alt={character.title}
                        style={{
                            transform: `rotate(${character.rot*45}deg)`
                          }}/>
         <div className="character-icons">


        </div></div>
          <ul className="character">
            <li>
              <h1>{character.title}</h1>
            </li>

            <li>
             
            </li>

            <li>
              <div className="character-description">
                <p>{character.description}</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="character-list">
          <ul className="bullet-item">
            {character.bullet.map((bulletPoint, key) => {
              return (
                <li key={key}>
                  <p>{bulletPoint}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
