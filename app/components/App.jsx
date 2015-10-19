import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };

    this.findNote = this.findNote.bind(this);
    this.addNote = this.addNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }
  render() {
    const notes = this.state.notes;
    return (
      <div className="ancor">
        <div className="title">
          <h1>{document.title}</h1>
        </div>
        <div className="add-ancor">
          <input className="add-text" ref="textAdd" type="text" />
          <button className="add-note box-shadow" onClick={this.addNote}>+</button>
        </div>
        <div className="notes-ancor">
          <Notes items={notes}
            onEdit={this.editNote} onDelete={this.deleteNote} />
        </div>  
      </div>
    );
  }
  deleteNote(id) {
    const notes = this.state.notes;
    const noteIndex = this.findNote(id);
    if(noteIndex < 0) {
      return;
    }
    this.setState({
      notes: notes.slice(0, noteIndex).concat(notes.slice(noteIndex + 1))
    });
  }
  addNote() {
    var newTask = 'Click to Edit';
    if(this.refs.textAdd.value != ''){
      newTask = this.refs.textAdd.value;
      this.refs.textAdd.value = '';
    }
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: newTask
      }])
    });
  }
  editNote(id, task) {
    let notes = this.state.notes;
    const noteIndex = this.findNote(id);

    if(noteIndex < 0) {
      return;
    }

    notes[noteIndex].task = task;

    this.setState({notes});
  }
  findNote(id) {
    const notes = this.state.notes;
    const noteIndex = notes.findIndex((note) => note.id === id);

    if(noteIndex < 0) {
      console.warn('Failed to find note', notes, id);
    }

    return noteIndex;
  }
}