import React from 'react';
//import Film from './Film';

export default function CharacterCard({ character }) {
    return(
        <div className='character-card'>
            <h2>{character.name}</h2>
            <p>Birth Year: {character.birth_year}</p>
            <p>Height: {character.height}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Hair Color{character.hair_color}</p>
            {/* <p>Films:</p>
            <ul>
                {character.films.map(film => {
                    return <Film filmLink={film} key={film} />;
                })}
            </ul> */}
        </div>
    );
}