import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, } from '../../redux/slices/auth';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../components/alerts';

const Login = () => {
  const nevigate = useNavigate();
  const dispach = useDispatch();

  const { error } = useSelector((state) => state.auth)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email address is required'),
      password: Yup.string().required('Password is required'),
    }),

    onSubmit: values => {
      dispach(loginUser(values)).unwrap().then((data, error) => {
        console.log('data', data.message);
        data.error === false && nevigate('/app/dashboard')
      })

    },
  })


  return (
    <>
      <div className='grid-cols-2 inline-flex'>
        <div className='col-span-4 text-white font-sans font-bold bg-black  min-h-screen pl-7 w-auto '>
          <div className='grid  min-h-screen items-center justify-items-start'>
            <form onSubmit={formik.handleSubmit}
              className='text-center'>
              <div className='row-span-4 row-start-2 text-4xl'>
                Sign In
                <div className='pt-10 pr-20'>

                  <input
                    type='email'
                    name='email'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder='Write your email'
                    className='w-full bg-black py-3 px-2 border hover: border-gray-500 rounded shadow text-base font-sans' />
                </div>
                <span className='text-sm'
                  style={{
                    color: 'red',
                  }}
                > {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
                </span>
                <div className='pt-2 pr-20'>
                  <input
                    type='password'
                    name='password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder='Write your password'
                    className=' w-full bg-black py-3 px-2 border hover: border-gray-500 rounded shadow text-base font-sans' />
                  <span className='text-sm mx-auto'
                    style={{
                      color: 'red',
                    }}
                  >
                    {formik.touched.password && formik.errors.password ? (
                      <div>{formik.errors.password}</div>
                    ) : null}
                  </span>
                  <Link to='/forgotpassword' className='text-sm font-sans font-medium text-gray-600 underline'>
                    Forgot password?
                  </Link>
                </div>

                {error &&
                  <div className="alert text-red-500" role="alert">
                    {error.message}
                  </div>
                }

                {error &&
                  <Alert alerts={error} />}
                <div className='text-sm font-sans font-medium w-full pr-20 pt-14'>
                  <button
                    type='submit'
                    className='text-center w-full py-4 bg-blue-700 hover:bg-blue-400 rounded-md text-white'>
                    SIGN IN
                  </button>
                </div>
              </div>
            </form>
            {/* <!-- Text --> */}
            <Link to='/registeruser' className='text-sm font-sans font-medium text-gray-400 underline'>
              Don´t have an account? RegisterUser
            </Link>
          </div>
        </div>

        <div className='image'>
          <img className='h-full'
            src={require('../assets/image/SkillsAssessment.jpg')}
            alt="SkillsAssessment"
          ></img>
        </div>

      </div>
    </>
  )
}
export default Login