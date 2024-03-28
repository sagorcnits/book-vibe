import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooks from "../../components/readBooks/ReadBooks";
import Sort from "../../components/sort/Sort";
import WishList from "../../components/wishList/WishList";
import { getStoreLocal, getWishLocal } from "../../utils/localStorage";

const Listed = () => {
  const [sortToggle, setSortToggle] = useState(true);
  const [books, setBooks] = useState([]);
  const [wishBooks, setWishBooks] = useState([]);
  const [isActive, setIsActive] = useState(true);

  const handleSort = () => {
    setSortToggle(!sortToggle);
  };

  const sorted = (event) => {
    setSortToggle(!sortToggle);

    if (isActive) {
      const storeData = getStoreLocal();
      if (event === "Rating") {
        const RatingSort = storeData.sort((a, b) => b.rating - a.rating);
        setBooks(RatingSort);
      } else if (event === "Number of Page") {
        const PageSort = storeData.sort((a, b) => b.totalPages - a.totalPages);
        setBooks(PageSort);
      } else {
        const PubishSort = storeData.sort(
          (a, b) => b.yearOfPublishing - a.yearOfPublishing
        );
        setBooks(PubishSort);
      }
    } else {
      const wishBooksData = getWishLocal();
      if (event === "Rating") {
        const WishRatingSort = wishBooksData.sort(
          (a, b) => b.rating - a.rating
        );
        setWishBooks(WishRatingSort);
      } else if (event === "Number of Page") {
        const WishPageSort = wishBooksData.sort(
          (a, b) => b.totalPages - a.totalPages
        );
        setWishBooks(WishPageSort);
      } else {
        const WishPublishSort = wishBooksData.sort(
          (a, b) => b.yearOfPublishing - a.yearOfPublishing
        );
        setWishBooks(WishPublishSort);
      }
    }
  };



  return (
    <div className="my-10">
      <h1 className=" bg-[rgba(19,19,19,0.05)] text-center py-10 rounded-lg  text-4xl font-bold">
        Books
      </h1>
      <div className="text-center">
        <Sort
          handleSort={handleSort}
          sortToggle={sortToggle}
          sorted={sorted}
        ></Sort>
      </div>
      <div className="my-6">
        <Tabs>
          <TabList>
            <Tab onClick={() => setIsActive(true)}>Read Books</Tab>
            <Tab onClick={() => setIsActive(false)}>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <ReadBooks books={books}></ReadBooks>
          </TabPanel>

          <TabPanel>
            <WishList wishBooks={wishBooks}></WishList>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Listed;
