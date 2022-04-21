import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    opened: false,
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        toggle: (state) => {
            state.opened = !state.opened;
        },
        show: (state) => {
            state.opened = true;
        },
        hide: (state) => {
            state.opened = false;
        },
    },
});



export const { toggle, show, hide } = basketSlice.actions;

export default basketSlice.reducer;
