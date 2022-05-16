import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { hide } from './BasketSlice'
import { bodyClassAddHide, bodyClassRemoveHide } from '../../header/Header';
import BasketItem from './BasketItem';
import './basket.sass'



const Basket = () => {

    const basketOpened = useSelector((state) => state.basket.opened);
    const dispatch = useDispatch();

    
    basketOpened ? bodyClassAddHide() : bodyClassRemoveHide()
   
    
    const closeBasket = () => {
        dispatch(hide());
    }

    const items = [
        {name: 'tovar1', price: 23, imgUrl: 'https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/03/87/65/58/54/71075d640cd7.jpg'},
        {name: 'tovar2', price: 28, imgUrl: 'https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/03/87/65/58/54/71075d640cd7.jpg'},
        {name: 'tovar3', price: 4, imgUrl: 'https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/03/87/65/58/54/71075d640cd7.jpg'}
    ]
    
    return (
        <div className= {`basket-window ${basketOpened ? "" : 'none'}`}>
        <div className="header">
            <div onClick={closeBasket} className="open-closed-basket">
                <img src="/icons/arrow.svg" alt="" title=""></img>
            </div>
            <p>Корзина</p>
        </div>
        <form>
            <div className="wrapper">
                {items.map(i => (
                    <BasketItem productName={i.name} price={i.price}/>
                ))}
            </div>
            <div className="total-amount">
                <div>
                    <p className="name">
                        Сумма
                    </p>
                    <p className="price">
                        9,999.99
                    </p>
                </div>     
                <button className="view-cart-button">
                    Смотреть корзину
                </button>          
            </div>            
        </form>                        
    </div>
    )
}

export default Basket