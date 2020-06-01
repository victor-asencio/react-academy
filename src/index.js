import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import Modal from './components/Modal.js';
import FlipCard from './components/FlipCard.js'
import cerebro from './images/cerebro-icon.png'

import { icons } from './icons/icons.js'


import './style/reset.scss';
import './style/index-sass.scss';

export default class  App extends React.Component {
  
  cards;
  state;
  aciertos;
  lockClick;
  showModalName;
  posiciones;

  constructor(props){
    super(props);
    this.state = {
      intentos: 0,
      previousCard: null,
      userName: null,
      showModalName: true,
    }
    this.posiciones = [];
    this.aciertos = 0;
    this.lockClick = false;
    this.cards = this.getGridElements();
  }

  handleSubmit(e){
    
    e.preventDefault();

    let inputText = document.querySelector('.modal-container__name-input').value;

    if( this.state.userName ){
      this.resetGame();
    }
    this.setState({
      showModalName: false,
      userName: inputText || 'player',
    })
    console.log(inputText);

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

  promptModal(){
    this.setState({
      showModalName: true,
    })
  }

  resetPositions(){
    this.posiciones = [];
    this.setState( prevState => prevState )
  }

  render(){

    let { showModalName, intentos, userName } = this.state;

    return (
      <>
        { showModalName && 
          <Modal onCloseModal={this.closeModal.bind(this)} showClose={this.showCloseIcon()}>
            <div className='modal-container__name-modal'>
              <img src={cerebro} alt='icono'></img>
              <form id='modal-container__name-form' onSubmit={this.handleSubmit.bind(this)}>
                <p className='modal-container__name-title'>Nombre del Jugador:</p>
                <input className='modal-container__name-input' type='text' placeholder='Nombre...' required/>
                <div className='modal-container__button'>
                  <input className='modal-container__button-submit' type='submit' value='Comenzar'/>
                </div>
              </form>
            </div>
          </Modal>
        }
        <Header intentos={intentos} resetPositions={this.resetPositions.bind(this)} promptModal={this.promptModal.bind(this)} resetHandler={this.resetGame.bind(this)}/>
        <div className='main'>
          <div className='main__card-grid'>
            {
              this.cards.map((elem, i)=>{
                  return <FlipCard key={i} index={i} handleClick={this.handleClick.bind(this)} card={elem} handleCardEvent={this.handleCardEvent}/>
              })
            }
          </div>
          <div className='main__dashboard'>
            <div className='main__active-player'>
              <h3>Jugador Actual</h3>
              <hr/>
              <p>Nombre: {userName}</p>
              <p>Intentos: {intentos}</p>
            </div>
            <div className='main__positions'>
              <h3>Posiciones</h3>
              <hr/>
              <div className='main__players-box'>
              {
                this.posiciones &&
                this.posiciones.map((elem, i)=>{
                  return (
                    <p key={i}>{i+1}. {elem.name} <span className='main__score-right'>{elem.intentos}</span></p>
                  )
                })
              }
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  resetGame(){
    this.cards = this.getGridElements();
    this.aciertos = 0;
    this.setState({
      intentos: 0,
      previousCard: null,
    })
  }

  handleClick(cardId){

    let { userName, intentos, previousCard } = this.state;

    if( !this.lockClick ){

      if( !this.lockClick && !previousCard ){
        this.cards[cardId].isFlipped = true;
        this.setState({
          previousCard: this.cards[cardId],
        })
      }else{
        this.lockClick = true;
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
              this.posiciones.push({
                name: userName,
                intentos: intentos+1,
              })
              alert(`Ganaste en ${intentos+1} intentos!`);
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