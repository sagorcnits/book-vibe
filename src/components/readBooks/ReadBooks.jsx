import { getStoreLocal } from '../../utils/localStorage';
import ListCard from '../listCard/ListCard';

const ReadBooks = () => {

const storeData = getStoreLocal();

// console.log(storeData)



  return (
    <div>

        {storeData.map((book, id) =>  <ListCard key={id} book={book}></ListCard>)}

      
    </div>
  );
};

export default ReadBooks;
