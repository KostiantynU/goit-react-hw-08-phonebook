import React, { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import SharedLayout from './SharedLayout/SharedLayout';
// import HomePage from 'pages/HomePage';
// import Contacts from 'pages/Contacts';
// import LogInPage from 'pages/LogInPage';
// import RegisterPage from 'pages/Register';
// import NotFoundPage from 'pages/NotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function App() {
  const HomePage = lazy(() => import('pages/HomePage'));
  const Contacts = lazy(() => import('pages/Contacts'));
  const LogInPage = lazy(() => import('pages/LogInPage'));
  const RegisterPage = lazy(() => import('pages/Register'));
  const NotFoundPage = lazy(() => import('pages/NotFound'));

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            {/* <Route index element={<HomePage />} /> */}
            <Route element={<PrivateRoute redirectTo="register" />}>
              <Route index element={<HomePage />} />
              <Route path="contacts" element={<Contacts />} />
            </Route>

            {/* <Route path="contacts" element={<Contacts />} /> */}
            <Route element={<PublicRoute redirectTo="/" restricted />}>
              <Route path="login" element={<LogInPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    )
  );
}
