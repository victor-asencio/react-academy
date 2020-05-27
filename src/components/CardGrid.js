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

    /**
     * 
     * @param { action: String, id } card 
     */
    handleCardEvent(card){
        if(!this.state.activeCard){
            this.setState({
                activeCard : card
            })
        }else{
            if(this.state.activeCard.id === card.id){
                this.state.activeCard.nextAction("resolved");
                card.nextAction("resolved");
                this.setState({
                    activeCard : null
                })
                console.log("Coincidencia")
            }else {
                this.state.activeCard.nextAction("notresolved");
                card.nextAction("notresolved");
                this.setState({
                    activeCard : null
                })
            }
        }
        //return card.nextAction("resolvd");
    }

    constructor(props){
        super(props);
        this.state = {};
        this.cards = this.getGridElements();
    }
    
    render() {
        console.log("render card grid")
        return (
            <div className='card-grid'>
                {
                    this.cards.map((elem, i)=>{
                        return <FlipCard key={i} icon={elem.icon} id={elem.id} handleCardEvent={this.handleCardEvent.bind(this)}/>
                    })
                }
            </div>
        )
    }
}

export default CardGrid;