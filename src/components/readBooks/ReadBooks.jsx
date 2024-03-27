import { getStoreLocal } from "../../utils/localStorage";
import ListCard from "../listCard/ListCard";

const ReadBooks = ({ readBooks }) => {
  const storeData = getStoreLocal();

  return (
    <div>
      {readBooks.length <= 0
        ? storeData.map((book, id) => <ListCard key={id} book={book}></ListCard>)
        : readBooks.map((book, id) => <ListCard key={id} book={book}></ListCard>)
        
      }
    </div>
  );
};

export default ReadBooks;
