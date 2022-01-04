import React from "react";
import Booklist from "./Components/Booklist";
import Navbar from "./Components/Navbar";
import BookContextProvider from "./Context/BookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <Booklist />
      </BookContextProvider>
    </div>
  );
}

export default App;
