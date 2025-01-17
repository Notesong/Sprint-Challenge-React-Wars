import React from 'react';
//import Film from './Film';
import { Card, CardHeader, CardBody, CardText, Col } from "reactstrap";

export default function CharacterCard({ character }) {
    return(
        <Col xs='12' md='6' lg='3'>
            <div className='character-card'>
                <Card>
                    {/* create the character's card */}
                    {/* all of the character attributes received through props from CharacterList */}
                    {/* margins added in StarWars.css */}
                    <CardHeader>{character.name}</CardHeader>
                    <CardBody>
                        <CardText>Birth Year: {character.birth_year}</CardText>
                        <CardText>Height: {character.height}{character.height !== 'unknown' ? 'cm' : ''}</CardText>
                        <CardText>Mass: {character.mass}{character.mass !== 'unknown' ? 'kg' : ''}</CardText>
                        <CardText>Eye Color: {character.eye_color}</CardText>
                        <CardText>Hair Color: {character.hair_color}</CardText>
                        {/* <p>Films:</p>
                        <ul>
                            {character.films.map(film => {
                                return <Film filmLink={film} key={film} />;
                            })}
                        </ul> */}
                    </CardBody>
                </Card>
            </div>
        </Col>
    );
}