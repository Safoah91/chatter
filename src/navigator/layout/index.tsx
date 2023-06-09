import Button from "components/button";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="bg-white max-w-[90rem] mx-auto py-5">
        <nav className="flex justify-between items-center">
          <div className="text-blue500 text-5xl font-bold">CHATTER</div>
          <ul className="flex justify-between gap-1">
            <li>
              <Link
                to="/"
                className="text-base px-4 py-2 font-bold hover:text-gray-500 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-base  px-4 py-2 font-bold hover:text-gray-500 transition-all duration-300"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-bas px-4 py-2 font-bold hover:text-gray-500 transition-all duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="text-base  px-4 py-2 font-bold hover:text-gray-500 transition-all duration-300"
              >
                Blogs
              </Link>
            </li>
          </ul>
          <div className="flex gap-5">
            <Button type="secondary-link" text="Log in" link="/login" />
            <Button type="primary-link" text="Sing up" link="/register" />
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-lightYellow pt-9 pb-24">
        <div className="max-w-[90rem] mx-auto">
          <nav className="flex justify-between items-start">
            <div className="text-blue500 text-5xl font-bold">CHATTER</div>
            <ul className="flex flex-col gap-1">
              <li className="pb-4">
                <h3 className="text-2xl font-medium">Explore</h3>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-bas text-gray-600 py-2 hover:text-gray-500 transition-all duration-300"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-base text-gray-600 py-2 hover:text-gray-500 transition-all duration-300"
                >
                  Trending blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-ba py-2 text-gray-600 hover:text-gray-500 transition-all duration-300"
                >
                  Chatter for teams
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li className="pb-4">
                <h3 className="text-2xl font-medium">Support</h3>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-bas text-gray-600 py-2 hover:text-gray-500 transition-all duration-300"
                >
                  Support docs
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-600 py-2 hover:text-gray-500 transition-all duration-300"
                >
                  Join slack
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-ba py-2 text-gray-600 hover:text-gray-500 transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-1">
              <li className="pb-4">
                <h3 className="text-2xl font-medium">Official blog</h3>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-bas text-gray-600 py-2 hover:text-gray-500 transition-all duration-300"
                >
                  Official blog
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base text-gray-600 py-2 hover:text-gray-500 transition-all duration-300"
                >
                  Engineering blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Layout;
