import React from 'react'

export default function Header(props) {

    let { intentos, resetHandler } = props;

    return (
        <header>
            <div className="title">
                Memory Game
            </div>
            <div className="board">
                Intentos: {intentos}
                <div className="reset-button">
                    <button className="reset" onClick={resetHandler}>Reset Game</button>
                </div>
            </div>
        </header>
    )
}
