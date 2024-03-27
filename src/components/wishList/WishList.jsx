import { getWishLocal } from "../../utils/localStorage";
import ListCard from "../listCard/ListCard";

const WishList = () => {

    const storeData = getWishLocal();


  return (
    <div>
        {storeData.map((book,id) => <ListCard key={id} book={book}></ListCard>)}
    </div>
  );
};

export default WishList;
