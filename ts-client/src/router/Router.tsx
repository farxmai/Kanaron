import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import PrivateRoute from "./components/PrivateRoute";
import UnauthorizedRoute from "./components/UnauthorizedRoute";
import NotFound from "pages/NotFound";
// AUTH
import SignIn from "pages/auth/SignIn/SignIn";
import SignUp from "pages/auth/SignUp/SignUp";
// DASHBOARD
import Home from "pages/dashboard/Home/Home";
import RacesList from "pages/dashboard/Races/RacesList";
import RaceCurrent from "pages/dashboard/Races/RaceCurrent";
import ClassesList from "pages/dashboard/Classes/ClassesList";
import ClassCurrent from "pages/dashboard/Classes/ClassCurrent";

export const Router = () => {
  const dashboardRoutes = [
    {
      index: true,
      element: <Navigate to={`${routes.dashboard.home}`} />,
    },
    { path: routes.dashboard.home, element: <Home /> },
    { path: routes.dashboard.races, element: <RacesList /> },
    { path: routes.dashboard.race, element: <RaceCurrent /> },
    { path: routes.dashboard.classes, element: <ClassesList /> },
    { path: routes.dashboard.class, element: <ClassCurrent /> },
  ];

  const profileRoutes = [{ index: true, element: null }];

  const authRoutes = [
    {
      index: true,
      element: <Navigate to={`${routes.auth.root}${routes.auth.login}`} />,
    },
    { path: routes.auth.login, element: <SignIn /> },
    { path: routes.auth.register, element: <SignUp /> },
  ];

  return (
    <Routes>
      <Route path={"/"} element={<PrivateRoute />}>
        {dashboardRoutes.map((el, i) => (
          <Route {...el} key={`DASHBOARD-${i}`} />
        ))}
      </Route>

      <Route path={routes.profile.root} element={<PrivateRoute />}>
        {profileRoutes.map((el, i) => (
          <Route {...el} key={`PROFILE-${i}`} />
        ))}
      </Route>

      <Route path={routes.auth.root} element={<UnauthorizedRoute />}>
        {authRoutes.map((el, i) => (
          <Route {...el} key={`AUTH-${i}`} />
        ))}
      </Route>

      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
};
