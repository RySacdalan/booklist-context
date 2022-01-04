import { useContext } from "react";
import { BookContext } from "../Context/BookContext";
import BookDetails from "./BookDetails";

const Booklist = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">
      There's no book to read yet. Come again next time!
    </div>
  );
};

export default Booklist;
