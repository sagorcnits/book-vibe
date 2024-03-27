import { getWishLocal } from "../../utils/localStorage";
import ListCard from "../listCard/ListCard";

const WishList = ({wishBooks}) => {

    const storeData = getWishLocal();


  return (
    <div>

      {
        wishBooks.length <=0
         ? storeData.map((book,id) => <ListCard key={id} book={book}></ListCard>)
        : wishBooks.map((book,id) => <ListCard key={id} book={book}></ListCard>)
      }
       
    </div>
  );
};

export default WishList;
