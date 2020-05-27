import React from 'react'

export default function Card(props) {
    return (
        <div onClick={props.onClick} className={`card ${props.color}`}>
            {props.children}
        </div>
    )
}
