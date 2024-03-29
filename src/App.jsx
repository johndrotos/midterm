import './App.css';
import './styles.css';
import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Note from './Note.jsx';
import notes from './notes.js';

function createNote(info) {
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
      {notes.map(createNote)}
      <Footer/>
    </div>
  );
}

export default App;
