import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ChefDetails from "../components/ChefDetails";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home/Home";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chef/:id",
        element: <ChefDetails></ChefDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefs/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
