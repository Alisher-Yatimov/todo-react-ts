import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './todosSlice';
import themeReducer from './themeSlice';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        todos: todoReducer,
        theme: themeReducer,
        user: userReducer
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>;

export default store;