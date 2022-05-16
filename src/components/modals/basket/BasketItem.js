import React from 'react';

const BasketItem = ({productName, price}) => {
    return (
        <>
            <div className="item">
                <div className="delete">
                    <div className="box"></div>
                </div>
                <img src="https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/03/87/65/58/54/71075d640cd7.jpg" alt="" title=""></img>
                <div className="nam-prod">
                    <p className="name">{productName}</p>
                    <p className="price">{price}</p>
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
        </>
    )
    
}

export default BasketItem