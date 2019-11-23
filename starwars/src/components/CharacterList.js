import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import Buttons from './Buttons';
import { Container, Row } from "reactstrap";

import './StarWars.css';

export default function Characters() {
    const [characterList, setCharacterList] = useState([]);
    // page numbers to change current page
    const [pageNumber, setPageNumber] = useState('1');
    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(null);

    const didUpdate = () => {
        axios
            // pull character list from server based on current page number
            .get(`https://swapi.co/api/people/?page=${pageNumber}`)
            .then(response => {
                setCharacterList(response.data.results);
                setPrev(response.data.previous);
                setNext(response.data.next);
                console.log(response.data.results);
            })
            .catch(error => console.log(error))
    }

    // update page when pageNumber is updated
    useEffect(didUpdate, [pageNumber]);

    return(
        <Container className='character-container'>
            {/* add buttons to page */}
            <Buttons setPageNumber={setPageNumber} pageNumber={pageNumber} prev={prev} next={next} />
            <Row>
                {/* character card creation */}
                {/* Character list is mapped over to give each character their own card */}
                {characterList.map(character => {
                    return <CharacterCard character={character} key={character.name} />;
                })}
            </Row>
        </Container>
    );
}