import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchInput from "./SearchInput";
import PropTypes from "prop-types";
function Nav({ keyword, keywordChange }) {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Todos App
        </Link>
        {location.pathname === "/" ? (
          <SearchInput keyword={keyword} keywordChange={keywordChange} />
        ) : null}
      </div>
    </nav>
  );
}
Nav.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};
export default Nav;
