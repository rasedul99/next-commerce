import Link from "next/link";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const Nav = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex  justify-end flex-wrap  py-3 mt-4  bg-[#103755]">
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={` flex flex-end  lg:flex lg:flex-end ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="text-sm lg:flex lg:flex-grow">
            {data?.map((category) => (
              <li key={category.id} className="mx-3">
                <Link
                  href=""
                  className="block mt-4 text-white mr-4 text-base lg:inline-block lg:mt-0 hover:opacity-80"
                  //   onClick={() => setIsSidebarOpen(false)}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
