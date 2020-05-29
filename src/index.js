import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Modal from './components/Modal.js';
import FlipCard from './components/FlipCard.js'
import cerebro from './images/cerebro-icon.png'

import { icons } from './icons/icons.js'


import './style/reset.css';
import './style/index.css';

export default class  App extends React.Component {
  
  cards;
  state;
  aciertos;
  lockClick;
  showModalName;

  constructor(props){
    super(props);
    this.state = {
      intentos: 0,
      previousCard: null,
      userName: null,
      showModalName: true,
    }
    this.aciertos = 0;
    this.lockClick = false;
    this.cards = this.getGridElements();
  }

  handleSubmit(e){
    e.preventDefault();
    let input = document.querySelector('#name-form .name-input');

    this.setState({
      showModalName: false,
      userName: input.value || 'player',
    })
    console.log(input.value);

  }

  closeModal(){
    if( this.state.userName ){
      this.setState({
        showModalName: false,
      })
    }
  }

  showCloseIcon(){
    return !!this.state.userName;
  }

  render(){

    let {showModalName, userName, intentos } = this.state;

    return (
      <div className='main'>
        { showModalName && 
          <Modal onCloseModal={this.closeModal.bind(this)} showClose={this.showCloseIcon()}>
            <div className='name-modal'>
              <img src={cerebro} alt='icono'></img>
              <form id='name-form' onSubmit={this.handleSubmit.bind(this)}>
                <p className='name-title'>Nombre del Jugador:</p>
                <input className='name-input' type='text' placeholder='Nombre...' required/>
                <div className='button'>
                  <input type='submit' value='Comenzar'/>
                </div>
              </form>
            </div>
          </Modal>
        }
        <Header intentos={intentos} resetHandler={this.resetGame.bind(this)}/>
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

    if( !this.lockClick ){

      if( !this.lockClick && !this.state.previousCard ){
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
        
        if( previousCard.id === secondCard.id ){

          this.lockClick = false;
          this.setState({
            previousCard: null,
          });
          this.aciertos++;

          if( this.aciertos === 10 ){
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
    for(let i = cards.length - 1; i>0; i--){
      newPos = Math.floor(Math.random()*(i+1));
      temp = cards[i];
      cards[i] = cards[newPos];
      cards[newPos] = temp;
    }

    for(let i = cards.length - 1; i>0; i--){
      newPos = Math.floor(Math.random()*(i+1));
      temp = cards[i];
      cards[i] = cards[newPos];
      cards[newPos] = temp;
    }
    
    return cards;
  }
    
}


ReactDOM.render(<App/>,document.querySelector('#root'));