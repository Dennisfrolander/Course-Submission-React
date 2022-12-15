import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

import { BsSearch } from "react-icons/bs";

const Navbar = ({ setSearchText }) => {
  const history = useNavigate();

  let updateSearchBar = React.useRef(null);

  const searchNewMovie = () => {
    history("/search/");
    setSearchText(updateSearchBar.current.value);
    const inputSearch = document.querySelector("input");
    inputSearch.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-custom">
        <div className="container">
          <Link className="navbar-brand" to="/">
            TMDB
          </Link>

          <form className="d-flex w-100" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search movies..."
              aria-label="Search"
              ref={updateSearchBar}
            />
            <button className="search-icon" onClick={searchNewMovie}>
              <BsSearch size={30} />
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
