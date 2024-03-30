import './App.css';
import './styles.css';
import React, {useState} from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';
import notes from './notes.js';

function initNote(info) {
  return(
    <Note 
      key = {info.key}
      title = {info.title}
      content = {info.content}
    />
  );
}



function App() {
  return (
    <div className="App">
      <Header/>
      {notes.map(initNote)}
      <button onclick={initNote}>Add Note</button>
      <Footer/>
      <Note/>
    </div>
  );
}

export default App;
