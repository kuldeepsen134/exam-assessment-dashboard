
import {
  Forgotpassword,
  Login,
  PasswordReset,
  RegisterUser,
} from "../pages";

const PublicRoutes = [

  {
    path: '/login',
    exact: true,
    name: 'Login',
    Component: Login
  },
  
  {
    path: '/registeruser',
    exact: true,
    name: 'Collection',
    Component: RegisterUser
  },
  {
    path: '/forgotpassword',
    exact: true,
    name: 'Forgotpassword',
    Component: Forgotpassword
  },
  {
    path: '/forgotpassword/verify',
    exact: true,
    name: 'PasswordReset',
    Component: PasswordReset
  },

]

export default PublicRoutes;