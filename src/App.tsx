import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from './types/State';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme';
import { Router } from 'react-router';
import { Routes } from './router/Routes';
import { Toast } from './components/Toast';
import { Variant } from './types/Variants';
import { clearError } from './store/userSlice';
import { history } from './router/history';

export const App = (): React.ReactElement => {
    const checked = useSelector((state: IState) => state.theme);
    const error = useSelector((state: IState) => state.user.error);
    const dispatch = useDispatch();
    const onClose = (): void => {
        dispatch(clearError());
    };
    return (
        <ThemeProvider theme={checked ? theme.dark : theme.light}>
            <Router history={history}>
                <Routes />
                {error && <Toast message={error} closeDelay={5000} variant={Variant.Primary} onClose={onClose} />}
            </Router>
        </ThemeProvider>
    );
};
