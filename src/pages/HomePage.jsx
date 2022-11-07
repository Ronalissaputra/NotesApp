import React from "react";
import NoteList from "../component/NoteList";
import { NoteData } from "../Utils/DataNote";
import SearchInput from "../Event/SearchInput";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: NoteData(),
      keyword: "",
    };

    this.HapusEventHandler = this.HapusEventHandler.bind(this);
    this.ArsipEventHandler = this.ArsipEventHandler.bind(this);
    this.searchNotesHandler = this.searchNotesHandler.bind(this);
  }

  searchNotesHandler(keyword) {
    this.setState(() => {
      return {
        keyword: keyword,
      };
    });
  }

  HapusEventHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState(() => {
      return {
        notes: notes,
      };
    });
  }

  ArsipEventHandler(id) {
    const notes = this.state.notes.map((note) => {
      return note.id === id ? { ...note, archived: !note.archived } : note;
    });

    this.setState(() => {
      return {
        notes: notes,
      };
    });
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.keyword);
    });

    const Aktif = notes.filter((note) => {
      return !note.archived;
    });
    const Arsip = notes.filter((note) => {
      return note.archived;
    });

    return (
      <div className="App">
        <div className="container">
          <div className="jumbotron">
            <h3 className="manu">Daftar Notes</h3>
            <SearchInput searchNotes={this.searchNotesHandler} />
          </div>
          {Aktif.length < 1 ? (
            <h6 className="message">Catatan Kosong</h6>
          ) : (
            <NoteList
              Notes={Aktif}
              Hapus={this.HapusEventHandler}
              Arsipkan={this.ArsipEventHandler}
            />
          )}
          <br />
          <hr />
          <h4>Note Arsip</h4>
          {Arsip.length < 1 ? (
            <h6 className="message">Catatan Kosong</h6>
          ) : (
            <NoteList
              Notes={Arsip}
              Hapus={this.HapusEventHandler}
              Arsipkan={this.ArsipEventHandler}
            />
          )}
        </div>
      </div>
    );
  }
}

export default HomePage;
