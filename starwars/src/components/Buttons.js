import React from 'react';
import { Button } from "reactstrap";

export default function Characters({ setPageNumber, pageNumber }) {

    return(
        <div className='buttons'>
            {/* buttons will only show up if the pages can move forwards or backwards */}
            {/* the button states received through props from CharacterList */}
            {/* margins added in StarWars.css */}
            {pageNumber > 1 &&
                <Button color="info" size="sm" onClick={() => setPageNumber(--pageNumber)} className="button left">Previous Page</Button>
            }
            {pageNumber < 9 &&
                <Button color="info" size="sm" onClick={() => setPageNumber(++pageNumber)} className="button right">Next Page</Button>
            }
        </div>
    );
}