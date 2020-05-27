import React from 'react'
import FlipCard from './FlipCard.js'

function CardGrid(props) {
    
    return (
        <div className='card-grid'>
            {
                props.cards.map((elem, i)=>{
                    return <FlipCard key={i} icon={elem.icon} id={elem.id} handleCardEvent={props.handleCardEvent}/>
                })
            }
        </div>
    )
    
}

export default CardGrid;