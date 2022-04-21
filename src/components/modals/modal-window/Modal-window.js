import React from 'react';
import './modal-window.sass';
import { useSelector, useDispatch } from 'react-redux'
import { hideModal } from './modalSlice';
import { bodyClassAddHide, bodyClassRemoveHide } from '../../header/Header';




const ModalWindow = () => {
	const modalOpened = useSelector((state) => state.modal.opened);

    modalOpened ? bodyClassAddHide() : bodyClassRemoveHide()

    const dispatch = useDispatch();

	const closeModal = () => {
        dispatch(hideModal());
    }
	return (
		<div className={`modal-window ${modalOpened ? 'show' : ''}`}>
			<div onClick={closeModal} className="close">
				<div className="box">
				</div>
			</div>
			<h3>Авторизация</h3>
			<p>Введите номер телефона</p>
			<form>
				<label>
					<input placeholder="+7 ( _ _ _ ) _ _ _ - _ _ - _ _"
						type="tel"
						id="phone"
						name="phone">
					</input>
				</label>
				<button>
					Продолжить
				</button>
				<a href="#">
					Регистрация на сайте
				</a>
			</form>
		</div>
	)
}

export default ModalWindow