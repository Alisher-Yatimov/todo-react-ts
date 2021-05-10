import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './todosSlice';
import themeReducer from './themeSlice';

const store = configureStore({
    reducer: {
        todos: todoReducer,
        theme: themeReducer
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>;

export default store;