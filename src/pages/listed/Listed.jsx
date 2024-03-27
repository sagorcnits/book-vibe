import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooks from "../../components/readBooks/ReadBooks";
import Sort from "../../components/sort/Sort";
import WishList from "../../components/wishList/WishList";
import { getStoreLocal, getWishLocal } from "../../utils/localStorage";

const Listed = () => {
  const [sortToggle, setSortToggle] = useState(true);
  const [readBooks, setReadBooks] = useState([]);
 

  const handleSort = () => {
    setSortToggle(!sortToggle);
  };

  const sorted = (event) => {
    setSortToggle(!sortToggle);
    const storeData = getStoreLocal();
    const wishBooksData = getWishLocal();
    if (event === "Rating") {
      const ratingSort = storeData.sort((a, b) => b.rating - a.rating);
      setReadBooks(ratingSort);
      console.log(wishBooksData)
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
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <ReadBooks readBooks={readBooks}></ReadBooks>
          </TabPanel>

          <TabPanel>
            <WishList ></WishList>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Listed;
