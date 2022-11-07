import React from "react";
import PropTypes from "prop-types";

function ArchiveButton({ id, Arsipkan, archived }) {
  return (
    <React.StrictMode>
      <button className="btn btn-secondary" onClick={() => Arsipkan(id)}>
        {archived ? "Pindahkan" : "Arsipkan"}
      </button>
    </React.StrictMode>
  );
}

ArchiveButton.prototype = {
  id: PropTypes.string.isRequired,
  Arsipkan: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default ArchiveButton;
