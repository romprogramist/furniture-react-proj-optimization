import React from 'react';
import './shadow.sass';
import { useSelector, useDispatch } from 'react-redux'
import { hide } from '../basket/basketSlice'





const Shadow = () => {
	const modalOpened = useSelector((state) => state.modal.opened);
    const basketOpened = useSelector((state) => state.basket.opened);
    const dispatch = useDispatch();
  
    const closeBasket = () => {
        dispatch(hide());
    }

    return (
        <div onClick={closeBasket} className={`shadow ${basketOpened || modalOpened ? 'active' : ''}`}></div>
    )
}

export default Shadow