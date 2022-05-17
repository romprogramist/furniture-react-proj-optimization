import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../components/modals/basket/basketSlice'
import modalReducer from '../components/modals/modal-window/modalSlice'


export const store = configureStore({
  reducer: {
    basket: basketReducer,
    modal: modalReducer
  },  
})