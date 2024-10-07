import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
function TabsItem({ tabId, title, isActive, todos, onDelete, onTodoFinished }) {
  let itemDisplay;
  if (todos.length > 0) {
    itemDisplay = (
      <div className="list-item" id="bookshelf">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onDelete={onDelete}
            onTodoFinished={onTodoFinished}
            isDetail={false}
          />
        ))}
      </div>
    );
  } else {
    itemDisplay = <p>Tidak ada catatan</p>;
  }
  return (
    <div
      className={`tab-pane fade ${isActive ? "show active" : ""}`}
      id={tabId}
      role="tabpanel"
    >
      <div className="mt-2">
        <h4>{title}</h4>
        {itemDisplay}
      </div>
    </div>
  );
}
TabsItem.propTypes = {
  tabId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onTodoFinished: PropTypes.func.isRequired,
};
export default TabsItem;
