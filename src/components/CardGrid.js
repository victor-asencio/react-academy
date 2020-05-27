import React, { Component } from 'react'
import FlipCard from './FlipCard.js'
import { icons } from '../icons/icons.js'

class CardGrid extends Component {
    
    state;
    cards;

    getGridElements(){
        let cards = [];
        for(let i = 0; i<10; i++){
            cards.push({
                id : i,
                icon : icons[i]
            });
            cards.push({
                id : i,
                icon : icons[i]
            });
        }
        return cards;
    }

    handleCardEvent(e){
        console.log()
    }

    constructor(props){
        super(props);
        this.state = {};
        this.cards = this.getGridElements();
    }
    
    render() {
        return (
            <div className='card-grid'>
                {
                    this.cards.map((elem, i)=>{
                        return <FlipCard key={i} icon={elem.icon} cardgridid={i} id={elem.id} handleCardEvent={this.handleCardEvent.bind(this)}/>
                    })
                }
            </div>
        )
    }
}

export default CardGrid;