import { createSlice } from '@reduxjs/toolkit';

const modeSlice = createSlice({
    name: 'mode',
    initialState: { isShowModal: false },
    reducers: {
        showModal(state) {
            state.isShowModal = true;
        },
        hideModal(state) {
            state.isShowModal = false;
        },
    },
});

const { actions, reducer } = modeSlice;
export const { showModal, hideModal } = actions;
export default reducer;
