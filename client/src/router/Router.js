import { MasterRoute, UnAuthRoute, UserRoute } from "router/PrivateRoutes";
import { Route, Switch } from "react-router";
import { mainRoutes, unAuthRoutes } from "./main.routes";
import { dashboardRoutes } from "./dashboard.routes";
import { masterRoutes } from "./master.routes";

const Router = ({ user }) => (
  <Switch>
    {/* public pages */}
    {mainRoutes.map((props, i) => (
      <Route key={i} exact {...props} user={user} />
    ))}
    {unAuthRoutes.map((props, i) => (
      <UnAuthRoute key={i} exact {...props} user={user} />
    ))}
    {/* private pages */}
    {dashboardRoutes.map((props, i) => (
      <UserRoute key={i} exact {...props} user={user} />
    ))}
    {masterRoutes.map((props, i) => (
      <MasterRoute key={i} exact {...props} user={user} />
    ))}
  </Switch>
);

export default Router;
