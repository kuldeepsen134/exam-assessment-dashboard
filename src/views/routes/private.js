import { Dashboard, Exam, Questions, RegisterUser, User } from "../pages"


const PrivateRoutes = [

  {
    path: '/app/dashboard',
    exact: true,
    name: 'Collection',
    Component: Dashboard
  },
  {
    path: '/app/exam',
    exact: true,
    name: 'Collection',
    Component: Exam
  },
  {
    path: '/app/user',
    exact: true,
    name: 'Collection',
    Component: User
  },
  {
    path: '/app/question',
    exact: true,
    name: 'Collection',
    Component: Questions
  },
]

export default PrivateRoutes
