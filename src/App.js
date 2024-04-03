import { Navigate, Route, Routes } from 'react-router-dom';

import PublicRoutes from './views/routes/public';
import './App.css';
import { Suspense } from 'react';
import PrivateLayout from './views/layouts/private';
import { Loading } from './views/components';
import PublicLayout from './views/layouts/public';
import { useSelector } from 'react-redux';
import PrivateRoutes from './views/routes/private';


function App() {


  const { isAuthenticated } = useSelector((state) => state.auth)



  // console.log('isAuthenticated',isAuthenticated)

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          exact
          path="/app"
          element={isAuthenticated ? <PrivateLayout /> : <Navigate to="/login" />}
        >
          <Route index element={<Navigate to="/app/dashboard" />} />
          {PrivateRoutes.map((route, i) => {
            return (
              route.Component && (
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.Component />}
                />
              )
            )
          })}
        </Route>

        <Route exact path="/" element={<PublicLayout />}>
          <Route index element={<Navigate to="/login" />} />

          {PublicRoutes.map((route, i) => {
            return (
              route.Component && (
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.Component />}
                />
              )
            )
          })}
        </Route>
      </Routes>
    </Suspense>

  );
}

export default App;
