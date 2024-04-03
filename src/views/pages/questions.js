import React, { useEffect } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";

import { addNewQuestions, getQuestions } from "../../redux/slices/question";

const Questions = () => {
  const dispatch = useDispatch();
  const { questionsList } = useSelector((state) => state.questions);

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      question: "",
      label: "",
      marks: "",
      is_currect: "",
    },

    validationSchema: Yup.object({
      question: Yup.string().required("Question is required"),
      label: Yup.string().required("Lable address is required"),
      marks: Yup.string().required("marks is required"),
      is_currect: Yup.string().required("Currect answer is required"),
    }),

    onSubmit: (values) => {
      dispatch(addNewQuestions(values)).unwrap()
    },
  });
  return (
    <>
      <div className="w-10/12 float-right">
        <div className="questions float-right">
          <div className="add-user content-end ">
            <button
              type="button"
              className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
              Add new question
            </button>
          </div>
        </div>

        <div className="bg-white px-6 py-8 rounded shadow-md text-black">
          <form onSubmit={formik.handleSubmit}>
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>

            <input
              type="text"
              className="block border border-grey-light w-5/6 p-3 rounded mb-4"
              name="question"
              placeholder="Question"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.question}
            />
            <span
              className="text-sm pb-2"
              style={{
                color: "red",
              }}
            >
              {" "}
              {formik.touched.question && formik.errors.question ? (
                <div>{formik.errors.question}</div>
              ) : null}
            </span>

            <input
              type="text"
              className="block border border-grey-light w-5/6 p-3 rounded mb-4"
              name="label"
              placeholder="Option"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.label}
            />
            <span
              className="text-sm"
              style={{
                color: "red",
              }}
            >
              {" "}
              {formik.touched.label && formik.errors.label ? (
                <div>{formik.errors.label}</div>
              ) : null}
            </span>

            <input
              type="text"
              className="block border border-grey-light  w-5/6 p-3 rounded mb-4"
              name="marks"
              placeholder="Marks"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.marks}
            />

            <span
              className="text-sm"
              style={{
                color: "red",
              }}
            >
              {" "}
              {formik.touched.marks && formik.errors.marks ? (
                <div>{formik.errors.marks}</div>
              ) : null}
            </span>

            <input
              type="text"
              className="block border border-grey-light  w-5/6 p-3 rounded mb-4"
              name="is_currect"
              placeholder="is_currect"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.is_currect}
            />
            <span
              className="text-sm"
              style={{
                color: "red",
              }}
            >
              {" "}
              {formik.touched.is_currect && formik.errors.is_currect ? (
                <div>{formik.errors.is_currect}</div>
              ) : null}
            </span>

            <button
              type="submit"
              className=" w-48 text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create New Question
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </form>
        </div>

        {questionsList.items &&
          questionsList.items.map((item, i) => {
            return (
              <>
                <div key={i} className="ques shadow-lg p-8 font-bold">
                  {i + 1}. {item.question}
                </div>

                <div className="option shadow-lg  pl-6 pb-4">
                  {item.options&&item.options.map((options, j) => {
                    return (
                      <>
                        <div key={j} className="form-check p-4">
                          <input
                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label className="form-check-label inline-block text-gray-800 flex ">
                            {options.label}
                          </label>
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};
export default Questions;
