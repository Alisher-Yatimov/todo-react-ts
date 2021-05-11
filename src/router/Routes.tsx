import { useSelector } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import { routes } from '../constants/routes';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Todos } from '../pages/Todos';
import { IState } from '../types/State';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const Routes  = () => {
    const token = useSelector((state: IState) => state.user.token?.token);
    return (
        <Switch>
            <PublicRoute path={routes.login} component={Login} isAuthenticated={!!token}/>
            <PublicRoute path={routes.register} component={Register} isAuthenticated={!!token}/>
            <PrivateRoute path={routes.todos} component={Todos} isAuthenticated={!!token}/>
            <Redirect to={routes.register} />
        </Switch>
    );
}