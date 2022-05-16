import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { show } from '../modals/basket/BasketSlice';
import { showModal } from '../modals/modal-window/modalSlice';
import { Link } from 'react-router-dom';
 
import './header.sass';

export const bodyClassAddHide = () => {
	document.body.className = 'hidden'
}
export const bodyClassRemoveHide = () => {
	document.body.className = ''
}

const Header = () => {
    const dispatch = useDispatch();

	const useToggle = (initialState = false) => {
		const [isOn, setIsOn] = useState(initialState);
		
		isOn ? bodyClassAddHide() : bodyClassRemoveHide()
		
		const handleState = () => setIsOn(!isOn);
		return [isOn, handleState]
	}
	
	
	
	const [isOn, switchIsOn] = useToggle()

	
	const openBasket = () => {
		dispatch(show());
	}
	const openModal = () => {
		dispatch(showModal());
	}
	
	
	return (
		<header className="Header">
			<div className={isOn ? 'wrapper wrapper-active': 'wrapper'}>
				<div className="logo">
					<a href="/">ВЕСТА</a>
				</div>
				<div className="menu">
					<nav>
						<ul className="main-ul">
							<li>
								<Link to="/">ГЛАВНАЯ</Link>
							</li>
							<li className="have-navigation">
								<p>КАТАЛОГ</p>
								<ul className="drop-down">
									<li>
										<Link to="/">ЖЕНСКИЙ ОТДЕЛ</Link>
									</li>
									<li>
										<Link to="/">МУЖСКОЙ ОТДЕЛ</Link>
									</li>
									<li>
										<Link to="/">АКСЕССУАРЫ</Link>										
									</li>
									<li>
										<Link to="/">РАСПРОДАЖА</Link>										
									</li>
								</ul>
							</li>
							<li>
								<Link to="about">О НАС</Link>																		
							</li>
							<li>
								<Link to="contacts">КОНТАКТЫ</Link>								
							</li>
							<li>
								<Link to="FAQ">FAQ</Link>								
							</li>
							<li className="icon">                            
								<div>
									<img onClick={openModal} className="registration" src="icons/registration.png" alt="" title=""></img>
								</div>
							</li>
							<li className="icon">
								<div>                                
									<img onClick={openBasket} className="basket open-closed-basket" src="/icons/basket.png" alt="" title=""></img>
								</div>                     
							</li>
						</ul>
					</nav>
				</div>
				<div onClick={switchIsOn} className="hamburger">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>                
		</header>
	)	
}

export default Header

