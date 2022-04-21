import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { hide } from './basketSlice'
import { bodyClassAddHide, bodyClassRemoveHide } from '../../header/Header';
import './basket.sass'



const Basket = () => {

    const basketOpened = useSelector((state) => state.basket.opened);
    const dispatch = useDispatch();

    
    basketOpened ? bodyClassAddHide() : bodyClassRemoveHide()
   
    
    const closeBasket = () => {
        dispatch(hide());
    }
    
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
                <div className="item">
                    <div className="delete">
                        <div className="box"></div>
                    </div>
                    <img src="https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/03/87/65/58/54/71075d640cd7.jpg" alt="" title=""></img>
                    <div className="nam-prod">
                        <p className="name">ЗАУЖЕННЫЕ ЧИНОС</p>
                        <p className="price">4,000.00</p>
                        <div className="quantity-of-goods">
                            <button>
                                -
                            </button>
                            <p className="counter">
                                0
                            </p>
                            <button>
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="delete">
                        <div className="box"></div>
                    </div>
                    <div className="delete"></div>
                    <img src="https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/03/87/65/58/54/71075d640cd7.jpg" alt="" title=""></img>
                    <div className="nam-prod">
                        <p className="name">ЗАУЖЕННЫЕ ЧИНОС</p>
                        <p className="price">4,000.00</p>
                        <div className="quantity-of-goods">
                            <button>
                                -
                            </button>
                            <p className="counter">
                                1
                            </p>
                            <button>
                                +
                            </button>
                        </div>
                    </div>
                </div>
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