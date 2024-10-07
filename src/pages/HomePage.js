import React from "react";
import TodoList from "../components/TodoList";
import { getAllTodo, getTodo, editTodo, deleteTodo } from "../utils/data-todos";
import PropTypes from "prop-types";
function HomePageWrapper({ keyword }) {
  return <HomePage keyword={keyword} />;
}
HomePageWrapper.propTypes = {
  keyword: PropTypes.string.isRequired,
};
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: getAllTodo(),
    };
    this.onTodoFinished = this.onTodoFinished.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }
  onDeleteHandler(id) {
    deleteTodo(id);
    this.setState({
      todos: getAllTodo(),
    });
    // eslint-disable-next-line no-undef
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Todo berhasil dihapus!",
      showConfirmButton: false,
      timer: 700,
    });
  }
  onTodoFinished(id, status) {
    const targetTodo = getTodo(id);
    if (targetTodo) {
      editTodo({
        id,
        title: targetTodo.title,
        description: targetTodo.description,
        is_finished: status,
      });
      this.setState({
        todos: getAllTodo(),
      });
      // eslint-disable-next-line no-undef
      Swal.fire({
        position: "top-end",
        icon: "success",
        // eslint-disable-next-line quotes
        title: `Berhasil mengubah status todo!`,
        showConfirmButton: false,
        timer: 700,
      });
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <TodoList
            todos={this.state.todos}
            onDelete={this.onDeleteHandler}
            onTodoFinished={this.onTodoFinished}
            keywordSearch={this.props.keyword}
          ></TodoList>
        </div>
      </div>
    );
  }
}
HomePage.propTypes = {
  keyword: PropTypes.string.isRequired,
};
export default HomePageWrapper;
