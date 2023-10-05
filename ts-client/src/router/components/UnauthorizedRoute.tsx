import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { routes } from "../routes";

const UnauthorizedRoute = () => {
  const { isAuthenticated } = useAuth();
  // return <Outlet />
  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={`${routes.dashboard.root}`} />
  );
};

export default UnauthorizedRoute;
