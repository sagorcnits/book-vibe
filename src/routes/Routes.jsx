import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root/Root";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Listed from "../pages/listed/Listed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch("../books.json"),
      },

      {
        path: "/listed_Books",
        element: <Listed></Listed>,
      },
      {
        path:'/pages_Read',
        element:<h1>Page Read</h1>
      }
    ],
  },
]);

export default router;
