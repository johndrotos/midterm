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
            <h1>New Note</h1>
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
                  placeholder="Content"
                  rows="5"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default InputForm;