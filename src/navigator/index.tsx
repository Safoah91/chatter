import Login from "pages/auth/login";
import Register from "pages/auth/register";
import Home from "pages/home";
import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Contact from "pages/contact";
import Blogs from "pages/blogs";
import AboutUs from "pages/aboutUs";

const router = createBrowserRouter([
  {},
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const Navigator: FC<{}> = () => {
  return <RouterProvider router={router} />;
};

export default Navigator;
