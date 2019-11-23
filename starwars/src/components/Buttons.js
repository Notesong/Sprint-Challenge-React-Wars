import React from 'react';
import { Button } from "reactstrap";

export default function Characters({ setPageNumber, pageNumber }) {

    return(
        <div className='buttons'>
            {pageNumber > 1 &&
                <Button color="primary" size="sm" onClick={() => setPageNumber(--pageNumber)} className="button left">Previous Page</Button>
            }
            {pageNumber < 9 &&
                <Button color="primary" size="sm" onClick={() => setPageNumber(++pageNumber)} className="button right">Next Page</Button>
            }
        </div>
    );
}