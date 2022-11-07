import React from "react";
import NoteForm from "../component/NoteForm";
import { addNote } from "../Utils/DataNote";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();
  function tambahEventHandler(notes) {
    addNote(notes);
    navigate("/");
  }
  return (
    <div className="container">
      <div className="jumbotron">
        <h3 className="menu">Input Notes</h3>
      </div>
      <NoteForm addNotes={tambahEventHandler} />
    </div>
  );
}

export default AddPage;
