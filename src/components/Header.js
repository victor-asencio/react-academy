import React from 'react'

export default function Header(props) {

    let { resetPositions, resetHandler, promptModal } = props;

    return (
        <header className='header'>
            <div className='header__title'>
                Memory Game
            </div>
            <div className='header__game-controls'>
                <button className='header__button' onClick={resetPositions}>Limpiar Posiciones</button>
                <button className='header__button' onClick={resetHandler}>Juego Nuevo</button>
                <button className='header__button' onClick={promptModal}>Cambiar Jugador</button>
            </div>
        </header>
    )
}
