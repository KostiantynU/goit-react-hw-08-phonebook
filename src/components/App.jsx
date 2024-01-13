import React, { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';
import SharedLayout from './SharedLayout/SharedLayout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function App() {
  const HomePage = lazy(() => import('pages/HomePage'));
  const Contacts = lazy(() => import('pages/Contacts'));
  const LogInPage = lazy(() => import('pages/LogInPage'));
  const RegisterPage = lazy(() => import('pages/Register'));
  const NotFoundPage = lazy(() => import('pages/NotFound'));

  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    let count = 0;
    console.log(`Another useEffect ${(count += 1)} times`);
    dispatch(refreshUser());
  }, [dispatch, isLoggedIn]);

  return (
    !isRefreshing && (
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route element={<PrivateRoute redirectTo="register" />}>
              <Route index element={<HomePage />} />
              <Route path="contacts" element={<Contacts />} />
            </Route>

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
