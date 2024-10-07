import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
function SearchInput({ keyword, keywordChange }) {
  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        placeholder="Temukan todo ..."
        type="search"
        onChange={(event) => keywordChange(event.target.value)}
        value={keyword}
      />
      <Link to="/add" className="btn btn-outline-light">
        Tambah
      </Link>
    </form>
  );
}
SearchInput.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
export default SearchInput;
