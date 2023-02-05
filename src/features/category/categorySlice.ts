import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categoryMenu } from '~/constants';

interface CategoryState {
    value: string;
}

const initialState: CategoryState = {
    value: categoryMenu.categories[0].id,
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeCategory: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

const { actions, reducer } = categorySlice;

export const { changeCategory } = actions;
export default reducer;
