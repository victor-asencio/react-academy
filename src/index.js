import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
//import ModalName from './components/ModalName.js';
import FlipCard from './components/FlipCard.js'

import { icons } from './icons/icons.js'


import './style/reset.css';
import './style/index.css';

export default class  App extends React.Component {
  
  cards;
  state;
  aciertos;
  lockClick;

  constructor(props){
    super(props);
    this.state = {
      intentos: 0,
      previousCard: null,
    }
    this.aciertos = 0;
    this.lockClick = false;
    this.cards = this.getGridElements();
  }


  render(){
    return (
      <div className='main'>
        {/*<ModalName/>*/}
        {/*<CardGrid ref='reset' cards={this.cards} handleCardEvent={this.handleCardEvent.bind(this)}/> */ }
        <Header intentos={this.state.intentos} resetHandler={this.resetGame.bind(this)}/>
        <div className='card-grid'>
          {
            this.cards.map((elem, i)=>{
                return <FlipCard key={i} index={i} handleClick={this.handleClick.bind(this)} card={elem} handleCardEvent={this.handleCardEvent}/>
            })
          }
        </div>
      </div>
    )
  }

  resetGame(){
    this.cards = this.getGridElements();
    this.setState({
      intentos: 0,
      previousCard: null,
    })
  }

  handleClick(cardId){

    console.log('lockClick: ', this.lockClick)

    if(!this.lockClick){

      if(!this.lockClick && !this.state.previousCard){
        console.log('entro');
        this.cards[cardId].isFlipped = true;
        this.setState({
          previousCard: this.cards[cardId],
        })
      }else{
        this.lockClick = true;
        let previousCard = this.state.previousCard;
        let secondCard = this.cards[cardId];
        
        this.setState( prevState => {
          return{
            intentos : prevState.intentos+1,
          }
        })
        
        secondCard.isFlipped = true;
        
        if(previousCard.id === secondCard.id){
          console.log("coincidencia");

          this.lockClick = false;
          this.setState({
            previousCard: null,
          });
          this.aciertos++;

          if(this.aciertos===10){
            setTimeout(()=>{
              alert(`Ganaste en ${this.state.intentos} intentos!`);
              this.resetGame();
            }, 1000);
          }

        }else{
          setTimeout(()=>{
            secondCard.isFlipped = false;
            previousCard.isFlipped = false;
            this.lockClick = false;
            this.setState({
              previousCard: null,
            });
          }, 1000)
        }
        
      }
    }
  }

  getGridElements(){
    
    let cards = [],
        newPos,
        temp;

    for(let i = 0; i<10; i++){
        cards.push({
          id : i,
          icon : icons[i],
          isFlipped: false,
          resolved: false,
        });
        cards.push({
          id : i,
          icon : icons[i],
          isFlipped: false,
          resolved: false,
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
    
}


ReactDOM.render(<App/>,document.querySelector('#root'));