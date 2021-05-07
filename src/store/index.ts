import {configureStore} from '@reduxjs/toolkit';
import todoReducer from './todosSlice';

const store = configureStore({
    reducer: {
        todos: todoReducer
    },
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>;

export default store;