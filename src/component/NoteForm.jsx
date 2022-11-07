import React from "react";
import PropTypes from "prop-types";
import SubmitButton from "../Event/SubmitButton";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      maxKarakter: 50,
      "Sisa-karakter": 50,
    };

    this.ontitleChangeEventHandler = this.ontitleChangeEventHandler.bind(this);
    this.onbodyChangeEventHandler = this.onbodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  ontitleChangeEventHandler(event) {
    const totalCharacterOnInput = parseInt(event.target.value.length);
    if (totalCharacterOnInput <= this.state.maxKarakter) {
      this.setState(() => {
        return {
          title: event.target.value,
          "Sisa-karakter": this.state.maxKarakter - totalCharacterOnInput,
        };
      });
    }
  }

  onbodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    return (
      <div className="box-input">
        <div className="input">
          <form onSubmit={this.onSubmitEventHandler}>
            <div className="number">
              <p className="count">{this.state["Sisa-karakter"]}</p>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              value={this.state.title}
              onChange={this.ontitleChangeEventHandler}
            />
            <textarea
              className="form-control"
              placeholder="Create your Note.."
              value={this.state.body}
              onChange={this.onbodyChangeEventHandler}
            ></textarea>
            <SubmitButton />
          </form>
        </div>
      </div>
    );
  }
}

// proptypes
NoteForm.propTypes = {
  addNotes: PropTypes.func.isRequired,
};

export default NoteForm;
