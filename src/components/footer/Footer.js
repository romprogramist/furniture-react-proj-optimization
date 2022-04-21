import React from 'react';
import './footer.sass'


const Footer = () => {

    return (
        <footer>
            <div className="wrapper">
                <div className="item">
                    <h3 className="logo">
                        ВЕСТА
                    </h3>
                </div>
                <div className="item">
                    <h3>
                        ЗАХОДИТЕ К НАМ
                    </h3>
                    <div>                
                        <p className="address">
                            ул. Арбат, 1а, Москва,
                            119019, Россия
                        </p>
                    </div>
                </div>
                <div className="item">
                    <h3>
                        ПРИСОЕДИНЯЙТЕСЬ
                    </h3>
                    <div className="imges">
                        <a href="#">
                            <img src="icons/icon-vk.webp" alt="" title=""></img>
                        </a>
                        <a href="#">
                            <img src="icons/icon-facebook.webp" alt="" title=""></img>
                        </a>
                        <a href="#">
                            <img src="icons/icon-twitter.webp" alt="" title=""></img>
                        </a>
                        <a href="#">
                            <img src="icons/icon-instagram.webp" alt="" title=""></img>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer