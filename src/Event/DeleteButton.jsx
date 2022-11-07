import React from "react";
import PropTypes from "prop-types";
function DeleteButton({ id, Hapus}) {
    return (
      <React.StrictMode>
          <button className="btn btn-danger" onClick={() => Hapus(id)}>Delete</button>
      </React.StrictMode>
    )
  }

  DeleteButton.prototype = {
    id: PropTypes.number.isRequired,
    Hapus: PropTypes.func.isRequired,
  }
  
    export default DeleteButton;