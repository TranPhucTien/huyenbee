import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '~/features/category/categorySlice';
import modeReducer from '~/components/Header/modeSlice';

const rootReducer = {
    category: categoryReducer,
    mode: modeReducer,
};

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
