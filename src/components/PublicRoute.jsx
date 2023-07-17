import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'redux/auth/selectors';

export default function PublicRoute({ restricted = false, redirectTo = '/' }) {
  const token = useSelector(selectToken);
  const shouldRedirect = token && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
}
