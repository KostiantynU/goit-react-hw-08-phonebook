import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
// import { selectIsLoggedIn } from 'redux/auth/selectors';
import { selectIsLoggedInAuth } from 'redux/authAndContactsSlice/authAndContactsSelectors';

export default function PrivateRoute({ redirectTo = 'register' }) {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoggedIn = useSelector(selectIsLoggedInAuth);

  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
}
