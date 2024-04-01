import './App.css';
import './styles.css';
import React, {useState} from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';
import initialNotes from './notes.js';
import InputForm from './InputForm.jsx';

function App() {
  
  const [notes, setNotes] = useState(initialNotes);
  //const [inputVisible, setInputVisible] = useState(false);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, { ...newNote, key: Date.now()}];
    });
    //setInputVisible(false);
  }

  function deleteNote(key) {
    setNotes(prevNotes => {
      return prevNotes.filter(note => note.key !== key);
    });
  }

  /*
  function toggleInputVisible() {
    setInputVisible(!inputVisible);
  }
  */

  return (
    <div className="App">
      <Header/>
      <InputForm onAdd={addNote} />


      {notes.map((note) => (
        <Note
          key={note.key}
          id={note.key}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}


      {/*
      {inputVisible ? (
        <InputForm onAdd={addNote} />
      ) : (
        <button className="addButton" onClick={toggleInputVisible}>Add Note</button>
      )}
      */}

      <Footer/>
    </div>
  );
}

export default App;
