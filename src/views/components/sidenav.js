import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <>
    
      <nav aria-label="alternative nav w-1/6  ">
        <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
          <ul className=" list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
            <li className="mr-3 flex-1">
              <Link
                to="/app/dashboard"
                className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
              >
                <i className="fas fa-tasks pr-0 md:pr-3"></i>
                <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                  Home
                </span>
              </Link>
            </li>

            <li className="mr-3 flex-1">
              <Link
                to="/app/user"
                className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
              >
                <i className="fas fa-tasks pr-0 md:pr-3"></i>
                <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                  Users
                </span>
              </Link>
            </li>

            <li className="mr-3 flex-1">
              <Link
                to="/app/question"
                className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500"
              >
                <i className="fa fa-envelope pr-0 md:pr-3"></i>
                <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                  Questions
                </span>
              </Link>
            </li>

            <li className="mr-3 flex-1">
              <Link
                to="#"
                className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500"
              >
                <i className="fa fa-envelope pr-0 md:pr-3"></i>
                <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                  Analytics
                </span>
              </Link>
            </li>

            <li className="mr-3 flex-1">
              <Link
                to="#"
                className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
              >
                <i className="fa fa-wallet pr-0 md:pr-3"></i>
                <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                  Payments
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Sidenav;
