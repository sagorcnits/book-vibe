import { FaRegStar } from "react-icons/fa6";
import useBooksdata from "../../hooks/useBooksdata";

const Books = () => {
  const { books } = useBooksdata();
  //   console.log(books);
  return (
    <div className="grid grid-cols-3 gap-5 my-8">
      {books.map((book, id) => {
        return (
          <div key={id} className=" card bg-base-100 shadow-xl p-6 border border-[rgba(19,19,19,0.15)]">
            <figure>
              <img
                src={book.image}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="py-4 space-y-4">
              <div className="flex gap-4">
                {book.tags.map((tag, id) => (
                  <span key={id} className="text-[#23BE0A] font-bold bg-[#23BE0A0D] px-6 py-2 rounded-full">{tag}</span>
                ))}
              </div>
              <h2 className="text-[#131313] font-bold text-[20px]">{book.bookName}</h2>
              <p className="border-b border-dashed pb-4 text-[#131313CC] font-bold">By : {book.author}</p>
              <div className="flex items-center justify-between text-[#131313CC] font-semibold">
                <p>{book.category}</p>
                <p className="flex items-center gap-2">
                  {book.rating} <FaRegStar></FaRegStar>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
