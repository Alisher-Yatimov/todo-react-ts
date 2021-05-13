import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../types/User';
import { URL } from '../constants/api';
import { history } from '../router/history';
import { routes } from '../constants/routes';

interface IUserState {
    token: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: IUserState = {
    token: null,
    loading: false,
    error: null,
};

export const loginUser = createAsyncThunk('user/login-user', async (userData: IUser, { rejectWithValue }): Promise<any> => {
    try {
        const response = await fetch(`${URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
        const data = await response.json();

        if (data.statusCode === 400) {
          rejectWithValue(data.message);
          return null;
        }
        return data;
    } catch (error) {
        rejectWithValue('smth went wrong');
    }
});

export const registerUser = createAsyncThunk('user/register-user', async (userData: IUser, { rejectWithValue }) => {
    try {
        const response = await fetch(`${URL}/auth/registration`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        if (data.statusCode === 400) {
            return rejectWithValue(data.message);
        }
        history.push(routes.login);
    } catch (error) {
        rejectWithValue('smth went wrong');
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state): void => {
            state.token = null;
        },
        clearError: (state): void => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state): void => {
            state.error = null;
        });

        builder.addCase(loginUser.fulfilled, (state, { payload }): void => {
            state.token = payload;
        });

        builder.addCase(registerUser.rejected, (state, { payload }): void => {
            state.error = `${payload}`;
        });

        builder.addCase(loginUser.rejected, (state, { payload }): void => {
            state.error = `${payload}`;
        });
    },
});

export const { logout, clearError } = userSlice.actions;

export default userSlice.reducer;
