
import { useDispatch } from 'react-redux';
import { toggle } from '../../modals/basket/BasketSlice';
import { showModal } from '../../modals/modal-window/modalSlice';

import './subheader.sass';
const Subheader = () => {
    const dispatch = useDispatch();
	
	const openBasket = () => {
		dispatch(toggle());
	}
	const openModal = () => {
		dispatch(showModal());
	}
	return (
		<section className="subheader">
			<div>
				<img onClick={openModal} className="registration" src="icons/registration.png" alt="" title=""></img>
				<img onClick={openBasket} className="basket open-closed-basket" src="icons/basket.png" alt="" title=""></img>
			</div>
		</section>
	)
}

export default Subheader