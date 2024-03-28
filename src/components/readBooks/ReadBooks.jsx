import { getStoreLocal } from "../../utils/localStorage";
import ListCard from "../listCard/ListCard";

const ReadBooks = ({ books }) => {
  const storeData = getStoreLocal();

  return (
    <div>
      {books.length <= 0
        ? storeData.map((book, id) => <ListCard key={id} book={book}></ListCard>)
        : books.map((book, id) => <ListCard key={id} book={book}></ListCard>)
        
      }
    </div>
  );
};

export default ReadBooks;
