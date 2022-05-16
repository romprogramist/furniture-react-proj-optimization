import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../components/modals/basket/BasketSlice'
import modalReducer from '../components/modals/modal-window/modalSlice'


export const store = configureStore({
  reducer: {
    basket: basketReducer,
    modal: modalReducer
  },  
})