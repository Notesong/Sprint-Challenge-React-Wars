import React from 'react';
import { Button } from "reactstrap";

export default function Characters({ setPageNumber, pageNumber, prev, next }) {

    return(
        <div className='buttons'>
            {/* buttons will only show up if the pages can move forwards or backwards */}
            {/* the button states received through props from CharacterList */}
            {/* margins added in StarWars.css */}
            {prev !== null &&
                <Button color="info" size="sm" onClick={() => setPageNumber(--pageNumber)} className="button left">Previous Page</Button>
            }
            {next !== null &&
                <Button color="info" size="sm" onClick={() => setPageNumber(++pageNumber)} className="button right">Next Page</Button>
            }
        </div>
    );
}