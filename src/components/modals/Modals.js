import React from 'react';
import Shadow from './shadow/Shadow';
import Basket from './basket/Basket';
import ModalWindow from './modal-window/Modal-window';

const Modals = () => {
    return (
        <React.Fragment>
            <ModalWindow/>
            <Basket/>
            <Shadow/>
        </React.Fragment>
    )
}

export default Modals;