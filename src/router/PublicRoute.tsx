import { Redirect, Route } from "react-router-dom";
import { routes } from "../constants/routes";
import { ICustomRoute } from "../types/CustomRoute";

export const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}: ICustomRoute) => {
  return <Route {...rest} render={(props) => isAuthenticated ? <Redirect to={routes.todos}/> : <Component {...props} />} />;
};
