import React, { useContext, useState } from "react";
import { BookContext } from "../Context/BookContext";

const BookForm = () => {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  //submitting new book
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        required
        placeholder="Enter author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default BookForm;
