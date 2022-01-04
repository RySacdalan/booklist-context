import React from "react";
import BookForm from "./Components/BookForm";
import Booklist from "./Components/Booklist";
import Navbar from "./Components/Navbar";
import BookContextProvider from "./Context/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <Booklist />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
