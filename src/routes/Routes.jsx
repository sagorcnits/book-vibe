import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root/Root";
import Blog from "../pages/blogs/Blog";
import Contact from "../pages/contact/Contact";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Listed from "../pages/listed/Listed";
import PageRead from "../pages/pageRead/PageRead";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h1>Not Found</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch("/books.json"),
      },

      {
        path: "/listed_Books",
        element: <Listed></Listed>,
      },
      {
        path: "/pages_Read",
        element: <PageRead></PageRead>,
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
