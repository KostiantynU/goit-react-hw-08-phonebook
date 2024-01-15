import React, { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
// import { changeIsLoggedIn } from 'redux/auth/authenticateSlice';
// import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';
import SharedLayout from './SharedLayout/SharedLayout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { selectIsRefreshingAuth } from 'redux/authAndContactsSlice/authAndContactsSelectors';
// import { selectIsErrorPhoneBook } from 'redux/contacts/selectors';

export default function App() {
  const HomePage = lazy(() => import('pages/HomePage'));
  const Contacts = lazy(() => import('pages/Contacts'));
  const LogInPage = lazy(() => import('pages/LogInPage'));
  const RegisterPage = lazy(() => import('pages/Register'));
  const NotFoundPage = lazy(() => import('pages/NotFound'));

  // const isRefreshing = useSelector(selectIsRefreshing);
  const isRefreshingAuth = useSelector(selectIsRefreshingAuth);
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isLoggedIn = useSelector(selectIsLoggedInAuth);

  // const isErrorPhoneBook = useSelector(selectIsErrorPhoneBook);
  // if (isErrorPhoneBook === 'Token expired') {
  //   dispatch(changeIsLoggedIn());
  // }

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshingAuth && (
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
