import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

import './StarWars.css';

export default function Characters() {
    const [characterList, setCharacterList] = useState([]);

    const didUpdate = () => {
        axios
            .get('https://swapi.co/api/people/?page=1')
            .then(response => {
                setCharacterList(response.data.results);
                console.log(response.data.results);
            })
            .catch(error => console.log(error))
    }

    useEffect(didUpdate, []);

    return(
        <div className='character-container'>
            {characterList.map(character => {
                return <CharacterCard character={character} key={character.name} />;
            })}
        </div>
    );
}