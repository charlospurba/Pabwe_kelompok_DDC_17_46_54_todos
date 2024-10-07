import React from "react";
import PropTypes from "prop-types";

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    // inisialisasi state
    this.state = {
      title: "",
      description: "",
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onDescriptionChangeEventHandler =
      this.onDescriptionChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
  onTitleChangeEventHandler(event) {
    if (event.target.value.length > 50) return;
    this.setState((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  }
  onDescriptionChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        description: event.target.value,
      };
    });
  }
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      title: "",
      description: "",
    });
  }
  render() {
    return (
      <div className="col-lg-12 col-md-12">
        <div className="mb-3 mt-4">
          <div className="border p-3">
            <h3>Tambah Todo</h3>
            <hr />
            <form id="form" onSubmit={this.onSubmitEventHandler}>
              <div className="form-group mb-3">
                <label htmlFor="inputTitle" className="formlabel">
                  Title
                </label>
                <div className="input-group">
                  <input
                    onInput={this.onTitleChangeEventHandler}
                    type="text"
                    className="form-control"
                    id="inputTitle"
                    value={this.state.title}
                  />
                  <span className="input-group-text">
                    {50 - this.state.title.length}
                  </span>
                </div>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="inputDescription" className="formlabel">
                  Description
                </label>
                <textarea
                  onInput={this.onDescriptionChangeEventHandler}
                  className="form-control"
                  id="inputDescription"
                  rows="5"
                  value={this.state.body}
                ></textarea>
              </div>
              <div className="form-group mb-3 text-end">
                <button type="submit" className="btn btn-primary">
                  Simpan Data
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
TodoInput.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
export default TodoInput;
