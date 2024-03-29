import React from 'react';

function Note(params) {
    return(
        <div>
            <h1>
                {params.title}
            </h1>
            <p>
                {params.content}
            </p>
        </div>
    );
}

export default Note;