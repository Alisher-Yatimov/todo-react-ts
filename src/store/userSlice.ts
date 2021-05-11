import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types/User";
import { URL } from "../constants/api";

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

export const loginUser = createAsyncThunk(
  "user/login-user",
  async (userData: IUser) => {
    try {
      const response = await fetch(`${URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register-user",
  async (userData: IUser, {rejectWithValue}) => {
    const response = await fetch(`${URL}/auth/registration`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    if (data.statusCode === 400) {
      return rejectWithValue(data.message)
    }
    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.token = payload;
      state.error = null;
    });

    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.token = payload;
    });

    builder.addCase(registerUser.rejected, (state, { payload }) => {
        state.error = `${payload}`;
    })
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
