import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  let { setIsSearch, setCurrentSearch } = props;

  const resetSearch = () => {
    setIsSearch(false);
    setCurrentSearch("");
  };

  return (
    <nav>
      <h1>Pexels API</h1>
      <ul>
        <li>
          <Link to="/" onClick={resetSearch}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
