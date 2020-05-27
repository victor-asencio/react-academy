import React, { createRef } from 'react'
import FlipCard from './FlipCard.js'

class CardGrid extends React.Component{

    references;

    constructor(props){
        super(props);
        this.references = [];
    }



    resetState(){
        
        this.refs.reset0.resetState();
        this.refs.reset1.resetState();
        this.refs.reset2.resetState();
        this.refs.reset3.resetState();
        this.refs.reset4.resetState();
        this.refs.reset5.resetState();
        this.refs.reset6.resetState();
        this.refs.reset7.resetState();
        this.refs.reset8.resetState();
        this.refs.reset9.resetState();
        this.refs.reset10.resetState();
        this.refs.reset11.resetState();
        this.refs.reset12.resetState();
        this.refs.reset13.resetState();
        this.refs.reset14.resetState();
        this.refs.reset15.resetState();
        this.refs.reset16.resetState();
        this.refs.reset17.resetState();
        this.refs.reset18.resetState();
        this.refs.reset19.resetState();
    }

    render(){

        return (
            <div className='card-grid'>
                {
                    this.props.cards.map((elem, i)=>{
                        return <FlipCard ref={`reset${i}`} /*{this.getOrCreateRef(i)}*/ key={i} icon={elem.icon} id={elem.id} handleCardEvent={this.props.handleCardEvent}/>
                    })
                }
            </div>
        )
    }
    
}

export default CardGrid;