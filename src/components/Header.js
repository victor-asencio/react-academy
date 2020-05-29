import React from 'react'

export default function Header(props) {

    let { resetPositions, resetHandler, promptModal } = props;

    return (
        <header>
            <div className="title">
                Memory Game
            </div>
            <div className="game-controls">
                <button onClick={resetPositions}>Limpiar Posiciones</button>
                <button onClick={resetHandler}>Juego Nuevo</button>
                <button onClick={promptModal}>Cambiar Jugador</button>
            </div>
        </header>
    )
}
