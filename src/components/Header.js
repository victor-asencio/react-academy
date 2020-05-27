import React from 'react'

export default function Header(props) {
    return (
        <header>
            <div className="title">
                Memory Game
            </div>
            <div className="board">
                Intentos: {props.intentos}
                <div className="reset-button">
                    <button className="reset" onClick={props.resetHandler}>Reset Game</button>
                </div>
            </div>
        </header>
    )
}
