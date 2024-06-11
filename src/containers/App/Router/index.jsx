import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainWrapper from '../MainWrapper';
import PrivateRoute from '../../../utils/routes/privateRoutes';
import PublicRoute from '../../../utils/routes/publicRoutes';
import LockScreen from '../../../shared/components/account/signIn/SignInFormNew';
import routes from './routes';
import AuthCallback from '../Router/WrappedRoutes/AuthCallback';
// import Breadcrumbs from './components/Breadcrumbs';

const Router = () => {
  return (
    <BrowserRouter>
      <MainWrapper>
        <main>
          <Routes>
            <Route
              path={'/login'}
              element={
                <PublicRoute>
                  <LockScreen />
                </PublicRoute>
              }
            />
            <Route
              path={'/callback'}
              element={
                <PublicRoute>
                  <AuthCallback />
                </PublicRoute>
              }
            />
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <PrivateRoute>
                    <route.component />
                  </PrivateRoute>
                }
                exact
              />
            ))}
          </Routes>
        </main>
      </MainWrapper>
    </BrowserRouter>
  );
};

export default Router;
