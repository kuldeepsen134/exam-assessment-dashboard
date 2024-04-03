import React, { useState } from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { forgotPasswordVerify } from '../../redux/slices/forgotpassword'
import { useLocation, useNavigate } from 'react-router-dom';


const PasswordReset = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation()


  const query = new URLSearchParams(location.search)
  const token = query.get('token')
  const { loading, error } = useSelector((state) => state.forgot)

  const formik = useFormik({
    initialValues: {
      token: token,
      newpassword: '',
      confirmpassword: '',
    },

    validationSchema: Yup.object({
      newpassword: Yup.string().required('New Password is required')
        .min(6, 'Password must be at least 6 characters'),
      confirmpassword: Yup.string().required('Confirm Password is required')
        .min(6, 'Password must be at least 6 characters')
        .oneOf([Yup.ref('newpassword')], 'Password must match'),
    }),
    onSubmit: (values) => {
      dispatch(forgotPasswordVerify(values)).then((data) => {
        if (data.payload.messsage) {
          navigate('/')
        }
      })
    },
  })
  return (
    <>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <form onSubmit={formik.handleSubmit}>
              <h1 className="mb-8 text-3xl text-center">Reset Password</h1>

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="newpassword"
                placeholder="New Password"
                value={formik.values.newpassword}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.newpassword && formik.errors.newpassword && (
                <div className="text-red-500">{formik.errors.newpassword}</div>
              )}

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirmpassword"
                placeholder="Confirm Password"
                value={formik.values.confirmpassword}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.confirmpassword && formik.errors.confirmpassword && (
                <div className="text-red-500">{formik.errors.confirmpassword}</div>
              )}

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
              >Submit
              </button>

            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default PasswordReset
