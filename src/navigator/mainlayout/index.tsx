import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { MdOutlinePostAdd, MdOutlineAnalytics } from "react-icons/md";
import { HiOutlinePower } from "react-icons/hi2";
import { BsBookmarks, BsEnvelopeOpen } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { toast } from "react-toastify";

const overview = [
  {
    name: "Blogs",
    icon: MdOutlinePostAdd,
    href: "/main",
    count: 3,
  },
  {
    name: "Bookmarks",
    icon: BsBookmarks,
    href: "/main/bookmarks",
    count: 4,
  },
  {
    name: "Drafts",
    icon: BsEnvelopeOpen,
    href: "/main/drafts",
  },
  {
    name: "Analytics",
    icon: MdOutlineAnalytics,
    href: "/main/analytics",
    count: 12,
  },
];

// const trending = [
//   {
//     name: "Programming",
//     href: "/programming",
//   },
//   {
//     name: "Data science",
//     href: "/data-science",
//     count: 3,
//   },
//   {
//     name: "Technology",
//     href: "/technology",
//     count: 4,
//   },
//   {
//     name: "Politics",
//     href: "/politics",
//     count: 4,
//   },
// ];

const personal = [
  {
    name: "Account",
    icon: AiOutlineUser,
    href: "/account",
  },
];

const MainLayout = () => {
  const [, setSidebarOpen] = useState(false);
  const location = useLocation();
  const token = Cookies.get("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate, token]);

  const handleLogout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("user");
    toast?.success("User logged out!");
    navigate("/");
  };

  return (
    <>
      {token && (
        <div>
          <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex min-h-0 flex-1 flex-col bg-white border-r">
              <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                <div className="flex flex-shrink-0 items-center px-4">
                  <p className="text-blue500 text-3xl font-bold">Chatter</p>
                </div>
                <nav className="mt-5 flex-1 space-y-6 px-4">
                  <ul className="ml-3">
                    <li className="text-xl mb-3 font-medium text-gray-700">
                      Overview
                    </li>
                    {overview.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className={
                            location.pathname === item.href
                              ? "bg-blue500 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                              : "text-gray-500 hover:bg-blue500 hover:text-white group flex items-center px-2 py-2 my-2 text-sm font-medium rounded-md transition-all duration-300 "
                          }
                        >
                          <item.icon
                            className={
                              location.pathname === item.href
                                ? "text-gray-200 mr-3 flex-shrink-0 h-6 w-6"
                                : "text-gray-400 group-hover:text-gray-200 mr-3 flex-shrink-0 h-6 w-6"
                            }
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {/* <ul className="ml-3">
                    <li className="text-xl mb-3 font-medium text-gray-700">
                      Trending Tags
                    </li>
                    {trending.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className={
                            location.pathname === item.href
                              ? "bg-blue500 text-blue500 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                              : "text-gray-500 hover:bg-blue500 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                          }
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul> */}
                  <ul className="ml-3">
                    <li className="text-xl mb-3 font-medium text-gray-700">
                      Personal
                    </li>
                    {personal.map((item) => (
                      <>
                        <li key={item.name}>
                          <Link
                            to={item.href}
                            className={
                              location.pathname === item.href
                                ? "bg-blue500 text-blue500 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                                : "text-gray-500 hover:bg-blue500 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                            }
                          >
                            <item.icon
                              className={
                                location.pathname === item.href
                                  ? "text-green-200 mr-3 flex-shrink-0 h-6 w-6"
                                  : "text-gray-400 group-hover:text-gray-200 mr-3 flex-shrink-0 h-6 w-6"
                              }
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        </li>
                      </>
                    ))}
                    <li onClick={handleLogout}>
                      <span
                        className={
                          "text-gray-500 hover:bg-blue500 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:cursor-pointer"
                        }
                      >
                        <HiOutlinePower
                          className={
                            "text-gray-400 group-hover:text-gray-200 mr-3 flex-shrink-0 h-6 w-6"
                          }
                          aria-hidden="true"
                        />
                        Logout
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col md:pl-64">
            <div className="sticky top-0 z-10 bg-green-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
              <button
                type="button"
                className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-green-500 hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> */}
              </button>
            </div>
            <main className="flex-1">
              <div className="border-b border-b-gray-200 py-8 px-8">
                <div>Search</div>
              </div>
              <div className="py-6 px-8">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default MainLayout;
