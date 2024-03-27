import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveLocalStorage, saveWishLocal } from "../../utils/localStorage";
const Details = () => {

  const bookId = useParams();
  const booksData = useLoaderData();
 const findBook  =  booksData.bookStore.find(book => book.bookId === bookId.id);



  return (
    <div className="flex gap-16 my-20">
      <ToastContainer></ToastContainer>
      <div className="bg-[rgba(19,19,19,0.05)] w-full rounded-xl py-10 flex-1  flex items-center">
        <img className="w-1/2 mx-auto" src={findBook.image} alt="images" />
      </div>

      
      <div className="flex-1">
        <h1 className="text-[#131313] font-bold text-[30px]">
          {findBook.bookName}
        </h1>
        <p className="pb-3 border-b border-dashed">By : {findBook.author}</p>
        <p className="py-3 bordesr-b border-dashed">{findBook.category}</p>
        <p className="py-3">
          <span className="font-bold">Review :</span> {findBook.review}
        </p>
        <div className="flex gap-4 items-center py-6 border-b ">
          <span className="font-bold">Tag</span>
          {findBook.tags.map((tag,id) => {
            return (
              <span key={id} className="text-[#23BE0A] font-bold bg-[#23BE0A0D] px-6 py-2 rounded-full">
                #{tag}
              </span>
            );
          })}
        </div>
        <div className="w-[60%] py-5">
          <ul className="*:flex *:gap-5 *:items-center *:justify-between *:mt-3  ">
            <li className="font-bold">
              <span className="text-[rgba(19,19,19,0.70)]">
                Number of Pages:
              </span>
             {findBook.totalPages}
            </li>
            <li className="font-bold">
              <span className="text-[rgba(19,19,19,0.70)]">Publisher:</span>{findBook.publisher}
            </li>
            <li className="font-bold">
              <span className="text-[rgba(19,19,19,0.70)]">
                Year of Publishing:
              </span>
              {findBook.yearOfPublishing}
            </li>
            <li className="font-bold">
              <span className="text-[rgba(19,19,19,0.70)]">Rating:</span>{findBook.rating}</li>
          </ul>
        </div>
        <div className="flex  gap-4">
          <button onClick={() => saveLocalStorage(findBook)} className="border px-7 py-2 rounded-lg font-bold duration-500 hover:bg-[#23BE0A] hover:text-white">
            Read
          </button>
          <button  onClick={() => saveWishLocal(findBook)} className="text-white px-7 py-2 rounded-lg font-bold bg-teal-700">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
