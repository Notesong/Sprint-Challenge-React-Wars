import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Film({ filmLink }) {
    const [film, setFilm] = useState('Unknown');

    const didUpdate = () => {
        axios
            .get({filmLink})
            .then(response => {
                setFilm(response.data);
                console.log(response.data);
            })
            .catch(error => console.log(error))
    };

    useEffect(didUpdate, []);

    return(
        <div className='film-container'>
            <li>{film.title}</li>
        </div>
    );
}