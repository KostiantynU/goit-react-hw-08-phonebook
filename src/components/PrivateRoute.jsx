import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export default function PrivateRoute({ redirectTo = 'register' }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
}
