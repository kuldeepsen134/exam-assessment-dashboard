import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useFormik } from "formik";

import {
  getSelectedUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../../redux/slices/users";

const User = () => {
  const dispatch = useDispatch();
  const { usersList, selectedUser } = useSelector((state) => state.users);
  console.log("selectedUser", selectedUser.id);

  const [initialData, setInitialData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    role: "",
  });

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    selectedUser.id && setInitialData(selectedUser);
  }, [selectedUser.id]);

  const formik = useFormik({
    initialValues: initialData,
    enableReinitialize: true,

    onSubmit: (values) => {
      dispatch(updateUser(values), getUsers(values), deleteUser(values))
        .unwrap()
        .then((data, error) => {
          console.log("data", data);
        });
    },
  });
  return (
    <>
      {usersList.items && (
        <div className="text-gray-900 bg-gray-200 w-5/6 float-right">
          <div className="p-4 flex">
            <h1 className="text-3xl">Users</h1>

            <div className="add-user content-end ">
              <button
                type="button"
                className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              >
                Add new user
              </button>
            </div>
          </div>

          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded">
              <tbody>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Id</th>
                  <th className="text-left p-3 px-5">Name</th>
                  <th className="text-left p-3 px-5">Email</th>
                  <th className="text-left p-3 px-5">Role</th>
                  <th className="text-left p-3 px-5">Mobile</th>
                  <th className="text-left p-3 px-5">Password</th>
                </tr>

                {usersList.items &&
                  usersList.items.map((users, i) => {
                    return (
                      <>
                        <tr
                          key={i}
                          className="border-b hover:bg-orange-100 bg-gray-100"
                        >
                          <td className="p-2 px-2 bg-transparent">
                            {users.id}
                          </td>
                          <td className="p-2 px-2 bg-transparent">
                            {users.name}
                          </td>
                          <td className="p-2 px-2 bg-transparent">
                            {users.email}
                          </td>
                          <td className="p-3 px-5 bg-transparent">
                            {users.role}
                          </td>

                          <td className="p-2 px-2 bg-transparent">
                            {users.mobile}
                          </td>
                          <td className="p-2 px-2 bg-transparent">
                            {users.password}
                          </td>
                          <td className="p-3 px-5 flex justify-end">
                            <button
                              type="button"
                              className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                              onClick={() =>
                                dispatch(getSelectedUser(users.id))
                              }
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                              onClick={() => dispatch(deleteUser(users.id))}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {selectedUser.id && (
        <div className="pt-6">
          <form
            onSubmit={formik.handleSubmit}
            className="w-full max-w-lg mx-auto p-4   rounded-xl"
          >
            <div className="flex flex-wrap  mx-auto  p-4">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            <div className="flex flex-wrap  mx-auto  p-4">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Mobile"
                  name="mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <div className="w-full md:w-1/2 px-3">
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Password"
                  name="password"
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            <div className="w-full md:w-1/2  pl-6 ">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Role"
                name="role"
                value={formik.values.role}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
            </div>

            <div className="w-full md:w-1/2 pt-8 pl-6">
              <button
                type="submit"
                className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded-xl focus:outline-none focus:shadow-outline mx-auto"
              >
                Update user
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default User;
