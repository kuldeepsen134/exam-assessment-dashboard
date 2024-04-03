import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Header, Loading, Sidenav } from '../components'

const PrivateLayout = () => {
  return (
    <>
      <Header />
      <Sidenav />
      <Suspense fallback={<Loading />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      {/* <Footer /> */}
    </>
  )
}
export default PrivateLayout
