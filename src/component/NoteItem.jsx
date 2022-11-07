import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "../Event/DeleteButton";
import ArchiveButton from "../Event/ArsipButton";
import showDate from "../Utils/Date";

function NoteItem({ id, title, body, createdAt, archived, Hapus, Arsipkan }) {
  return (
    <article className="col-md-4 mt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {showDate(createdAt)}
          </h6>
          <p className="card-text">{body}</p>
          <div className="box-btn">
            <DeleteButton id={id} Hapus={Hapus} />
            <ArchiveButton id={id} Arsipkan={Arsipkan} archived={archived} />
          </div>
        </div>
      </div>
    </article>
  );
}

// Proptypes
NoteItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  Hapus: PropTypes.func.isRequired,
  Arsipkan: PropTypes.func.isRequired,
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteItem;
