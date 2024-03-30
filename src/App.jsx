import './App.css';
import './styles.css';
import React, {useState} from 'react';
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

function noteInput() {
  const [note, setNote] = useState({
    title: '',
    content: ''
  });
  
}


function App() {
  return (
    <div className="App">
      <Header/>
      {notes.map(createNote)}
      <button onclick={noteInput}>Add Note</button>
      <Footer/>
    </div>
  );
}

export default App;
