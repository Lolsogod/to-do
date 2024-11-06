import { RootState } from 'src/store/store';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const UnAuthedRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    return !isAuthenticated ? children : <Navigate to="/" />;
  };

export default UnAuthedRoute;