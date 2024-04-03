import { useFormik } from "formik";
import * as Yup from "yup";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import users, { getSelectedUser, getUsers } from "../../redux/slices/users";

const Header = () => {
  const dispatch = useDispatch();
  const { usersList, selectedUser } = useSelector((state) => state.users);

  console.log("selectedUser", selectedUser.id);

  const [initialData, setInitialData] = useState({
    user: "",
  });

  useEffect(() => {
    dispatch(getSelectedUser());
  }, [dispatch]);

  useEffect(() => {
    selectedUser.id && setInitialData(selectedUser);
  }, [selectedUser.id]);

  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,

    validationSchema: Yup.object({
      user: Yup.string().required("Please enter address"),
    }),

    onSubmit: (values) => {
      console.log("data");

      dispatch(getSelectedUser(values))
        .unwrap()
        .then((data, error) => {
          console.log("data", data);
        });
    },
  });

  return (
    <>
      <header className="pb-24">
        <nav
          aria-label="menu nav"
          className="bg-gray-800 pt-2 md:pt-1 pb-4 px-1 mt-0 h-auto fixed w-full z-20 top-0 "
        >
          <div className="flex flex-wrap items-center">
            <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
              <Link to="#" aria-label="Home">
                <span className="text-xl pl-2">
                  <i className="em em-grinning"></i>
                </span>
              </Link>
            </div>

            <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
              <span className="relative w-full">
                <form onSubmit={formik.handleSubmit}>
                  <input
                    aria-label="text"
                    className="w-full text-black transition border border-transparent focus:outline-none focus:border-blue-400 rounded py-3 px-2 pl-12 appearance-none leading-normal relative"
                    placeholder="Enter User Id"
                    name="user"
                    onChange={formik.handleChange}
                    value={formik.values.user || ""}
                  />

                  <div className="absolute search-icon  text-black bg-gray-200 inset-y-0 left-0 w-10  p-4">
                    <button
                      className="fill-current pointer-events-none  w-4 h-4"
                      type="submit"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="search"
                        className="w-4"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </form>
                {formik.touched.user && formik.errors.user ? (
                  <div className="text-red-500 ">{formik.errors.user}</div>
                ) : null}
              </span>
            </div>

            <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
              <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                <li className="flex-1 md:flex-none md:mr-3">
                  <a
                    className="inline-block py-2 px-4 text-white no-underline"
                    href="#"
                  >
                    Active
                  </a>
                </li>
                <li className="flex-1 md:flex-none md:mr-3">
                  <a
                    className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                    href="#"
                  >
                    link
                  </a>
                </li>
                <li className="flex-1 md:flex-none md:mr-3">
                  <div className="relative inline-block">
                    <button className="drop-button text-white py-2 px-2">
                      {" "}
                      <span className="pr-2">
                        <i className="em em-robot_face"></i>
                      </span>{" "}
                      Hi, User{" "}
                      <svg
                        className="h-3 fill-current inline"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </button>
                    <div
                      id="myDropdown"
                      className="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible"
                    >
                      <Link
                        to="#"
                        className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                      >
                        <i className="fa fa-user fa-fw"></i> Profile
                      </Link>
                      <Link
                        to="#"
                        className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                      >
                        <i className="fa fa-cog fa-fw"></i> Settings
                      </Link>
                      <div className="border border-gray-800"></div>
                      <Link
                        to="#"
                        className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                      >
                        <i className="fas fa-sign-out-alt fa-fw"></i> Log Out
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="ggggg">
        {usersList.items && usersList.items.map((item, i) => {})}
      </div>
    </>
  );
};
export default Header;
