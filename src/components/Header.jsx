import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center  my-container md:py-8  bg-[#faf8ff]">
      <h4 className="text-3xl">JobConnector</h4>

      <ul className="lg:flex hidden my-5 md:my-0 gap-5 ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/statistics"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Statistics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="applied-jobs"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Applied Jobs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="blogs"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Blog
          </NavLink>
        </li>
      </ul>

      <div className="px-5 hidden lg:flex py-3 btn-gradient text-xl">
        <Link>Start Applying</Link>
      </div>

      <div className="lg:hidden">
        <button
          aria-level="Open menu"
          title="Open menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <Bars3BottomRightIcon className="w-5 text-gray-600" />
        </button>

        {isMenuOpen && (
          <div className="absolute top-0 left-0 right-0 z-10 bg-white">
            <div className="p-5 border rounded-lg shadow-sm ">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link to="/" className="inline-flex items-center">
                    <h4 className="text-3xl">CareerConnector</h4>
                  </Link>
                </div>

                <div>
                  <button
                    aria-level="Close menu"
                    title="Close menu"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <XMarkIcon className="w-5 text-gray-600" />
                  </button>
                </div>
              </div>
              <ul className="flex flex-col md:flex-row my-5 md:my-0 gap-5 ">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/statistics"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Statistics
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="applied-jobs"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Applied Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="blogs"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Blog
                  </NavLink>
                </li>
              </ul>

              <div className="px-5 py-3 btn-gradient text-xl">
                <Link>Star Applying</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
