import { useLocation, Navigate, Outlet } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';

const RequireAuth = () => {
  // const { auth } = useAuth();
  const location = useLocation();
  const getToken = JSON.parse(localStorage.getItem('Token')) || '';

  return getToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
