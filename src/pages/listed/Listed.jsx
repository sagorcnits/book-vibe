import { IoIosArrowDown } from "react-icons/io";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooks from "../../components/readBooks/ReadBooks";
import WishList from "../../components/wishList/WishList";
const Listed = () => {
  return (
    <div className="my-10">
      <h1 className=" bg-[rgba(19,19,19,0.05)] text-center py-10 rounded-lg  text-4xl font-bold">
        Books
      </h1>
    <div className="text-center">
      <details className="dropdown my-10 ">
      <summary className="cursor-pointer w-40 flex justify-between items-center gap-2 px-7 py-3  text-white font-bold rounded-lg bg-[#23BE0A]">
        Sort By <IoIosArrowDown className="text-xl"></IoIosArrowDown>
      </summary>
        <ul className="p-2 mt-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40 font-semibold">
          <li>
            <a>Sort BY</a>
          </li>
          <li>
            <a>Rating</a>
          </li>
          <li>
            <a>Number of Page</a>
          </li>
          <li>
            <a>Published Year</a>
          </li>
        </ul>
      </details>
    </div>
   

      <div className="my-6">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <ReadBooks></ReadBooks>
          </TabPanel>

          <TabPanel>
            <WishList></WishList>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Listed;
