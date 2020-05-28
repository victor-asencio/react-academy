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
    this.state = {
      intentos: 0,
      aciertos: 0
    }
    this.cards = this.getGridElements();
  }


  render(){
    return (
      <div className="main">
        <Header intentos={this.state.intentos} resetHandler={this.resetGame.bind(this)}/>
        <CardGrid ref="reset" cards={this.cards} handleCardEvent={this.handleCardEvent.bind(this)}/>
      </div>
    )
  }

  resetGame(){
    this.cards = this.getGridElements();
    this.refs.reset.resetState();
    this.setState({
      intentos: 0,
      aciertos: 0,
      activeCard: null
    })
  }

  getGridElements(){
    
    let cards = [],
        newPos,
        temp;

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

    /* Shuffle array two times */
    for( let i = cards.length - 1; i>0; i--){
      newPos = Math.floor(Math.random()*(i+1));
      temp = cards[i];
      cards[i] = cards[newPos];
      cards[newPos] = temp;
    }

    for( let i = cards.length - 1; i>0; i--){
      newPos = Math.floor(Math.random()*(i+1));
      temp = cards[i];
      cards[i] = cards[newPos];
      cards[newPos] = temp;
    }
    
    return cards;
  }

  handleCardEvent(card){
    if(!this.state.activeCard){
        this.setState({
            activeCard : card
        })
    }else{
        let intentos = this.state.intentos;
        this.setState({
          intentos: ++intentos
        })
        if(this.state.activeCard.id === card.id){
            this.state.activeCard.nextAction("resolved");
            card.nextAction("resolved");

            console.log('aciertos ',this.state.aciertos);
            this.setState((prevState) => {
              return {
                activeCard : null,
                aciertos: ++prevState.aciertos
              } 
            })
            console.log('aciertos ',this.state.aciertos);
            if(this.state.aciertos===9){
              alert(`Ganaste en ${this.state.intentos}!`);
              this.resetGame();
            }
        }else {
            this.state.activeCard.nextAction("notresolved");
            card.nextAction("notresolved");
            this.setState({
                activeCard : null
            })
        }
    }
  }
    
}


ReactDOM.render(<App/>,document.querySelector("#root"));