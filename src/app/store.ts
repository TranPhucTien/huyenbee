import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '~/features/category/categorySlice';

const rootReducer = {
    category: categoryReducer,
};

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
