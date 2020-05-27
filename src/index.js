import React from "react";
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import CardGrid from './components/CardGrid.js';

import { icons } from './icons/icons.js'


import './style/reset.css';
import './style/index.css';

export default class  App extends React.Component {
  
  cards;
  state;
  constructor(props){
    super(props);
    this.state = {}
    this.cards = this.getGridElements();
  }


  render(){
  
    console.log("render index")
    return (
      <div className="main">
        <Header/>
        <CardGrid cards={this.cards} handleCardEvent={this.handleCardEvent.bind(this)}/>
      </div>
    )
  }

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
    
}


ReactDOM.render(<App/>,document.querySelector("#root"));