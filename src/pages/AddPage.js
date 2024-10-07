import TodosInput from "../components/TodoInput";
import { addTodo } from "../utils/data-todos";
import { useNavigate } from "react-router-dom";
function AddPage() {
  const navigate = useNavigate();
  function onAddTodoHandler({ title, description }) {
    addTodo({ title, description });
    navigate("/");
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <TodosInput onAddTodo={onAddTodoHandler}></TodosInput>
      </div>
    </div>
  );
}
export default AddPage;
