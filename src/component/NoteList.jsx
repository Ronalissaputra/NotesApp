import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

function NoteList({ Notes, Hapus, Arsipkan, archived }) {
  return (
    <div className="note-item">
      <div className="row">
        {Notes.map((note) => (
          <NoteItem
            key={note.id}
            Hapus={Hapus}
            Arsipkan={Arsipkan}
            archived={archived}
            {...note}
          />
        ))}
      </div>
    </div>
  );
}

NoteList.propType = {
  Notes: PropTypes.func.isRequired,
  Hapus: PropTypes.func.isRequired,
  Arsipkan: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteList;
