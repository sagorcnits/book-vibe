import { Link } from "react-router-dom";

const ListCard = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="flex gap-5 border p-4 rounded-lg mt-4">
      <div className="w-[25%]  bg-[rgba(19,19,19,0.05)] py-10 rounded-2xl flex justify-center items-center">
        <img src={image} alt="" />
      </div>
      <div>
        <h1 className="text-3xl font-bold ">{bookName}</h1>
        <p className="text-[rgba(19,19,19,0.70)] font-semibold py-4">
          By : {author}
        </p>
        <div>
          <span className="font-bold">tag</span>

          {tags.map((tag, id) => {
            return (
              <span
                key={id}
                className="text-[#23BE0A] font-bold bg-[#23BE0A0D] px-6 py-2 rounded-full"
              >
                #{tag}
              </span>
            );
          })}

          <span className="font-bold">
            Year of Publishing: {yearOfPublishing}
          </span>
        </div>
        <div className="py-4 border-b flex gap-10 *:text-[rgba(19,19,19,0.70)] *:font-semibold">
          <span>Publisher: {publisher}</span>
          <span>Page {totalPages}</span>
        </div>
        <div className="flex gap-5 py-6">
          <button className="text-[#328EFF] font-bold bg-[#328EFF26] px-6 py-2 rounded-full">
            Category: {category}
          </button>
          <button className="text-[#FFAC33] font-bold bg-[#FFAC3326] px-6 py-2 rounded-full">
            Rating: {rating}
          </button>
          <Link to={`/details/${bookId}`}>
            <button className="text-white font-bold bg-[#23BE0A] px-6 py-2 rounded-full hover:bg-black duration-500">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
