import Banner from "../../components/banner/Banner";
import Books from "../../components/books/Books";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="my-12">
        <h1 className="text-4xl font-bold text-center text-[#131313]">Books</h1>
        <Books></Books>
      </div>
    </>
  );
};

export default Home;
