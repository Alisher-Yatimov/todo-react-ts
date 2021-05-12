import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todoReducer from './todosSlice';
import themeReducer from './themeSlice';
import userReducer from './userSlice';
import storage from 'redux-persist/lib/storage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'user',
    version: 1,
    storage,
};

const store = configureStore({
    reducer: {
        todos: todoReducer,
        theme: themeReducer,
        user: persistReducer(persistConfig, userReducer),
    },
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    devTools: true,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;
