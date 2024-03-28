import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/notFound/NotFound";
import Root from "../layout/root/Root";
import Contact from "../pages/contact/Contact";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Listed from "../pages/listed/Listed";
import PageRead from "../pages/pageRead/PageRead";
import UpComming from "../pages/upComming/UpComming";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<NotFound></NotFound>,
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
        path: "/upcomming",
        element: <UpComming></UpComming>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
