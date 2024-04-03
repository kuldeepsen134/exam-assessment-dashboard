import React from 'react'

import { useFormik } from 'formik'
import * as Yup from 'yup';

import { registerUser } from '../../redux/slices/register'
import { useDispatch, useSelector } from 'react-redux';




const RegisterUser = () => {

  const dispach = useDispatch();
  const {userData} = useSelector((state) => state.register)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      password: '',

    },

    validationSchema: Yup.object({
     name: Yup.string().required('Full name is required'),  
      email: Yup.string().email('Invalid email address').required('Email address is required'),
      password: Yup.string().required('Password is required'),
      mobile: Yup.string().required('Mobile number is required'),

    
    }),

    onSubmit: values => {
      dispach(registerUser(values)).unwrap()
    },
  })



  return (
    <>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <form onSubmit={formik.handleSubmit}>
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="name"
                placeholder="Full Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              <span className='text-sm'
                style={{
                  color: 'red',
                }}
              > {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
              ) : null}
              </span>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <span className='text-sm'
                style={{
                  color: 'red',
                }}
              > {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
              </span>


              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />


              <span className='text-sm'
                style={{
                  color: 'red',
                }}
              > {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
              </span>

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="mobile"
                placeholder="Mobile"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobile}
              />
              <span className='text-sm'
                style={{
                  color: 'red',
                }}
              > {formik.touched.mobile && formik.errors.mobile ? (
                <div>{formik.errors.mobile}</div>
              ) : null}
              </span>


              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1"
              >Create Account
              </button>

              <div className="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the
                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                  Terms of Service
                </a> and
                <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                  Privacy Policy
                </a>
              </div>
            </form>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a className="no-underline border-b border-blue text-blue" href="http://localhost:3000/">
              Log in
            </a>.
          </div>
        </div>
      </div>
    </>
  )
}
export default RegisterUser;