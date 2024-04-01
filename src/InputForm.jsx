import React, { useState } from 'react';

function InputForm (props){

  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }


  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: '',
      content: '',
    });
    event.preventDefault();
  }

    return(
        <div className = "inputForm">
            <form onSubmit={submitNote}>
                <input
                  name="title"
                  value={note.title}
                  onChange={handleChange}
                  placeholder="Title"
                />
                <textarea
                  name="content"
                  value={note.content}
                  onChange={handleChange}
                  placeholder="Write a note..."
                  rows="5"
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default InputForm;