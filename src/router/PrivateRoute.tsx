import { Redirect, Route } from "react-router-dom";
import { routes } from "../constants/routes";
import { ICustomRoute } from "../types/CustomRoute";

export const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}: ICustomRoute) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={routes.login} />
        )
      }
    />
  );
};
