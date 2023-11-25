import React from 'react';
import { useEffect,useState } from 'react';
import NotesItem from './NotesItem';
const NotesList = () => {

  const [notes, setNotes] = useState([]);
  // const [note, setNote] = useState({});
  // const [inputs, setInputs] = useState({ title: '', body: '' });
  // const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    fetch('/api/notes')
      .then((res) => res.json())
      .then((data) => setNotes(data.notes))
      .catch((error) => console.log('Error fetching notes', error));
  };
  return (
    <div className="notes-container">
      {notes &&
        notes.map((note) => 
        
        {
          console.log(note)
          return (<div>hi</div>)
        }

          
          // <NotesItem
          //   key={note.id}
          //   note={note}
          //   getNote={getNote}
          //   // toggleModal={setToggle}
          //   // deleteNote={deleteNote}
          // />
        )}
    </div>
  );
};
export default NotesList;