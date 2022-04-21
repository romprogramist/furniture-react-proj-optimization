
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    opened: false,
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal: (state) => {
            state.opened = true;
        },
        hideModal: (state) => {
            state.opened = false;
        },
        toggleModal: (state) => {
            state.opened = !state.opened;
        },
    },
});

export const { showModal, hideModal, toggleModal } = modalSlice.actions;

export default modalSlice.reducer;