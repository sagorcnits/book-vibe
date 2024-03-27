import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function getStoreLocal() {
  const getData = localStorage.getItem("books");
  if (getData) {
    return JSON.parse(getData);
  }

  return [];
}

function saveLocalStorage(books) {
  const storeData = getStoreLocal();
  const existData = storeData.find((book) => book.bookId === books.bookId);
  if (!existData) {
    storeData.push(books);
    localStorage.setItem("books", JSON.stringify(storeData));
    toast("Book Added to Read List");
  } else {
    toast.warn("You have Already Read this Book");
  }
}

// wishList localstorage

function getWishLocal() {
  const getData = localStorage.getItem("wishBooks");
  if (getData) {
    return JSON.parse(getData);
  }

  return [];
}

function saveWishLocal(books) {
  const storeData = getWishLocal();
  const readStoredata = getStoreLocal();
  const existData = storeData.find((book) => book.bookId === books.bookId);
  const existDataRead = readStoredata.find(
    (book) => book.bookId === books.bookId
  );
  if (!existData && !existDataRead) {
    storeData.push(books);
    localStorage.setItem("wishBooks", JSON.stringify(storeData));
    toast("Book Added to WishList");
  } else {
    toast.warn("You have Already Read this Book");
  }
}

export { getStoreLocal, getWishLocal, saveLocalStorage, saveWishLocal };
