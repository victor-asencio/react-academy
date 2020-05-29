import React from 'react'

export default function ModalName(props) {

    let { showClose, onCloseModal } = props;

    return (
        <div className="modal-container">
            <div className="modal">
            { showClose &&
                <div className="close-icon-wrapper">
                    <i className="fas fa-times close-icon" onClick={onCloseModal}></i>
                </div>
            }
                {props.children}
            </div>
        </div>
    )
}
