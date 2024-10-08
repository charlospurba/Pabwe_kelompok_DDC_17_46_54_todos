import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTodo, editTodo } from "../utils/data-todos";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [formData, setFormData] = useState({ title: "", description: "" });

  useEffect(() => {
    const currentTodo = getTodo(id);
    if (currentTodo) {
      setTodo(currentTodo);
      setFormData({
        title: currentTodo.title,
        description: currentTodo.description,
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo({
      id: parseInt(id, 10),
      title: formData.title,
      description: formData.description,
      is_finished: todo.is_finished,
    });
    navigate("/");
  };

  return todo ? (
    <div className="container">
      <h2>Edit Todo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default EditPage;
