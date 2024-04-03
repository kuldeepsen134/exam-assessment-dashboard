import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../redux/slices/auth'
import forgotPasswordSlice from './slices/forgotpassword'
import registerUserSlice from './slices/register'
import questionsSlice from './slices/question'
import usersSlice from './slices/users'

const store = configureStore({
  reducer: {
    auth: authSlice,
    forgot: forgotPasswordSlice,
    register: registerUserSlice,
    questions: questionsSlice,
    users: usersSlice
  },

})
// console.log('Store Connection', store.getState());

export default store
