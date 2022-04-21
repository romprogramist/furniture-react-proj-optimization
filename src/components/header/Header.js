import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { show } from '../modals/basket/basketSlice';
import { showModal } from '../modals/modal-window/modalSlice';
 
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
					<a href="/Home/Index">ВЕСТА</a>
				</div>
				<div className="menu">
					<nav>
						<ul className="main-ul">
							<li>
								<a href="#">ГЛАВНАЯ</a>
							</li>
							<li className="have-navigation">
								<p>КАТАЛОГ</p>
								<ul className="drop-down">
									<li>
										<a href="#">
											ЖЕНСКИЙ ОТДЕЛ
										</a>
									</li>
									<li>
										<a href="#">
											МУЖСКОЙ ОТДЕЛ
										</a>
									</li>
									<li>
										<a href="#">
											АКСЕССУАРЫ
										</a>
									</li>
									<li>
										<a href="#">
											РАСПРОДАЖА
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#">О НАС</a>
							</li>
							<li>
								<a href="#">КОНТАКТЫ</a>
							</li>
							<li>
								<a href="#">FAQ</a>
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

