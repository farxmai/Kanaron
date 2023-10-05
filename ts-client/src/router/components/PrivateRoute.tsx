import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { routes } from "../routes";
import DashboardLayout from "layouts/DashboardLayout";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  // return <Outlet />
  return isAuthenticated ? (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  ) : (
    <Navigate to={`${routes.auth.root}${routes.auth.login}`} />
  );
};

export default PrivateRoute;
