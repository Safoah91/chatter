import Login from "pages/auth/login";
import Register from "pages/auth/register";
import Home from "pages/home";
import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Contact from "pages/contact";
import Blogs from "pages/main/blogs";
import AboutUs from "pages/aboutUs";
import Confirmation from "pages/auth/confirmation";
import MainLayout from "./mainlayout";
import Bookmarks from "pages/main/bookmarks";
import Drafts from "pages/main/drafts";
import Analytics from "pages/main/analytics";
import Accounts from "pages/main/accounts";
// import CreateBlog from "pages/main/blogs/components/create";
import Blog from "pages/main/blogs/components/blog";
import CreateBlog from "pages/main/blogs/components/create";

const router = createBrowserRouter([
  {
    path: "/main",
    element: <MainLayout />,
    children: [
      {
        path: "/main/",
        element: <Blogs />,
      },
      {
        path: "/main/blogs/blog/:id",
        element: <Blog />,
      },
      {
        path: "/main/blogs/create",
        element: <CreateBlog />,
      },
      {
        path: "/main/bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "/main/drafts",
        element: <Drafts />,
      },
      {
        path: "/main/analytics",
        element: <Analytics />,
      },
      {
        path: "/main/accounts",
        element: <Accounts />,
      },
    ],
  },

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
  {
    path: "/confirmation",
    element: <Confirmation />,
  },
]);

const Navigator: FC<{}> = () => {
  return <RouterProvider router={router} />;
};

export default Navigator;
