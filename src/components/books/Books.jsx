import { Link } from "react-router-dom";
import useBooksdata from "../../hooks/useBooksdata";
import BookCard from "../bookCard/BookCard";

const Books = () => {
  const { books } = useBooksdata();

  return (
    <div className="grid md:grid-cols-3 gap-5 my-8">
      {books.map((book, id) => {
        return (
          <Link to={`/details/${book.bookId}`}  key={id}>
            <BookCard book={book}></BookCard>
          </Link>
        );
      })}
    </div>
  );
};

export default Books;
