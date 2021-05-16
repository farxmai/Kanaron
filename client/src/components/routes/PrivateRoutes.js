import React from "react";
import { Route, Redirect } from "react-router-dom";

export const UserRoute = ({ exact, path, user, component: Component }) => {
  if (!user) return <Redirect to="/login" />;
  return (
    <Route
      exact={exact}
      path={path}
      component={() => <Component user={user} />}
    />
  );
};

export const MasterRoute = ({ exact, path, user, component: Component }) => {
  const isMaster = user && user.permission === "master";
  if (!isMaster) return <Redirect to="/login" />;
  return (
    <Route
      exact={exact}
      path={path}
      component={() => <Component user={user} />}
    />
  );
};

export const UnAuthRoute = ({ exact, path, user, component }) => {
  if (user) return <Redirect to="/" />;
  return <Route exact={exact} path={path} component={component} />;
};
