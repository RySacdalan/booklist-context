import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <h1>Ryan's Booklist</h1>
      <p>Current books available: {books.length} to get.</p>
    </div>
  );
};

export default Navbar;
