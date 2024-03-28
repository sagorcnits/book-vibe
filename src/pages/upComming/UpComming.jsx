import BookCard from "../../components/bookCard/BookCard";
import useBooksdata from "../../hooks/useBooksdata";

const UpComming = () => {

const {books} = useBooksdata("/upComming.json");


  return (
    <div>
      <h1 className=" bg-[rgba(19,19,19,0.05)] text-center py-10 rounded-lg  text-4xl font-bold">
     Up Comming Books...
      </h1>  

      <div className="grid md:grid-cols-3 gap-4 my-10">
        {books.map((book,id) => <BookCard book={book}></BookCard>)}
      </div>
      
    </div>
  );
};

export default UpComming;
