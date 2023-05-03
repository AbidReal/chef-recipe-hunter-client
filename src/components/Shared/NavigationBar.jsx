import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div>
      <div
        className={` ${
          isHomePage
            ? "bg-nav lg:bg-transparent lg:absolute lg:w-full lg:text-white"
            : "bg-nav"
        }`}
      >
        <div className="custom-container">
          <div className="relative flex items-center justify-between">
            <Link to="/" className="font-extrabold text-3xl ">
              Y<span className=" text-green-500 ">umami</span> Eats
            </Link>
            {/* nav section  */}

            <ul className="items-center hidden space-x-8 lg:flex text-2xl">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-green-400" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "text-green-400" : "default"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
            <div className="flex items-center space-x-4 md:space-x-10">
              <div className="flex items-center gap-5">
                {user && (
                  <NavLink className="text-5xl">
                    <FaUserCircle></FaUserCircle>
                  </NavLink>
                )}

                {user ? (
                  <Link>
                    <button className=" px-4 md:px-7 py-4 btn-color text-white font-extrabold md:text-lg rounded-lg  ">
                      Logout
                    </button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button className=" px-4 md:px-7 py-4 btn-color text-white font-extrabold md:text-lg rounded-lg  ">
                      Login
                    </button>
                  </Link>
                )}
              </div>

              <div className="lg:hidden ">
                <button onClick={() => setIsMenuOpen(true)}>
                  <Bars3Icon className="w-6"></Bars3Icon>
                </button>
                {/* 
                mobile responsive nav bar 
                */}
                {isMenuOpen && (
                  <div className="absolute top-0 left-0 w-full z-10">
                    <div className="p-5 bg-nav border rounded-lg shadow-sm">
                      {/* logo */}
                      <div className="flex items-center justify-between mg-4">
                        <Link to="/" className="font-extrabold text-3xl ">
                          Y<span className="text-green-500">umami</span> Eats
                        </Link>
                        <button className=" px-4 md:px-7 py-4 btn-color text-white font-extrabold md:text-lg rounded-lg  ">
                          Login
                        </button>
                        {/* dropdown close button */}
                        <div>
                          <button onClick={() => setIsMenuOpen(false)}>
                            <XMarkIcon className="w-6"></XMarkIcon>
                          </button>
                        </div>
                      </div>
                      {/* nav items section  */}
                      <nav>
                        <ul className="space-y-4 py-5">
                          <li>
                            <Link
                              to="/"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
                            >
                              Home
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/blog"
                              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
                            >
                              Blog
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
