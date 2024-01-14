import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
// import { selectToken } from 'redux/auth/selectors';
import { selectTokenAuth } from 'redux/authAndContactsSlice/authAndContactsSelectors';

export default function PublicRoute({ restricted = false, redirectTo = '/' }) {
  // const token = useSelector(selectToken);
  const token = useSelector(selectTokenAuth);
  const shouldRedirect = token && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
}
