import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <nav className="flex justify-between">
          <div>CHATTER</div>
          <ul className="flex justify-between">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
          <div>
            <Link to="/login">Log in</Link>
            <Link to="/register">Sign up</Link>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
