import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Name of the wind", author: "Patrick ROthfuss", id: uuidv4() },
    { title: "The final empire", author: "Brandon Sanderson", id: uuidv4() },
    { title: "Stainless Longganisa", author: "Bob Ong", id: uuidv4() },
  ]);

  //add new books
  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuidv4() }]);
  };

  //delete existing books
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
