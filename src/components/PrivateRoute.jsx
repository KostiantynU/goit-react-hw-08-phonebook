import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn, selectToken } from 'redux/auth/selectors';

export default function PrivateRoute({ redirectTo = 'register' }) {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  return token ? <Outlet /> : <Navigate to={redirectTo} />;
}
