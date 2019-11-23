import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import Buttons from './Buttons';
import { Container, Row, Button } from "reactstrap";

import './StarWars.css';

export default function Characters() {
    const [characterList, setCharacterList] = useState([]);
    const [pageNumber, setPageNumber] = useState('1');

    const didUpdate = () => {
        axios
            .get(`https://swapi.co/api/people/?page=${pageNumber}`)
            .then(response => {
                setCharacterList(response.data.results);
                console.log(response.data.results);
            })
            .catch(error => console.log(error))
    }

    useEffect(didUpdate, [pageNumber]);

    return(
        <div className='page-container'>
            <Container className='character-container'>
                <Buttons setPageNumber={setPageNumber} pageNumber={pageNumber} />
                <Row>
                    {characterList.map(character => {
                        return <CharacterCard character={character} key={character.name} />;
                    })}
                </Row>
            </Container>
        </div>
    );
}