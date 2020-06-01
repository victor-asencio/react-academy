import React from 'react'

export default function ModalName(props) {

    let { showClose, onCloseModal } = props;

    return (
        <div className='modal-container'>
            <div className='modal-container__modal'>
            { showClose &&
                <div className='modal-container__close-icon-wrapper'>
                    <i className='fas fa-times modal-container__close-icon' onClick={onCloseModal}></i>
                </div>
            }
                {props.children}
            </div>
        </div>
    )
}
