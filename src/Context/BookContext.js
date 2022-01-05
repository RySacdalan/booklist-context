import React, { useReducer, createContext, useEffect } from "react";
import { bookReducer } from "../Reducer/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  //useReducer can have third argument(function).
  //setting the data from the localStorage as the initial data/info
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  //useEffect, setting the data to the localStorage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
