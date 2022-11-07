import React from "react";
import PropTypes from "prop-types";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };

    this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
  }

  onInputChangeHandler(event) {
    this.setState(
      {
        keyword: event.target.value,
      },
      () => {
        event.preventDefault();
        this.props.searchNotes(this.state.keyword.toLowerCase());
      }
    );
  }

  render() {
    return (
      <div className="search">
        <input
          type="text"
          className="form-control"
          placeholder="Search.."
          value={this.state.keyword}
          onChange={this.onInputChangeHandler}
        />
      </div>
    );
  }
}

SearchInput.propTypes = {
  searchNotes: PropTypes.func.isRequired,
};

export default SearchInput;
