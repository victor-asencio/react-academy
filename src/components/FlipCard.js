import React from 'react';
import ReactCardFlip from 'react-card-flip';
import Card from './Card.js';

function FlipCard(props){

   
  let { card, handleClick, index } = props;
  let { icon, isFlipped } = card;

  return (
    <div className='card-container'>
      <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <Card color='card-back' index={index} onClick={handleClick}>
          <i className='fas fa-question-circle'></i>
        </Card>
        <Card color='card-front' index={index} onClick={handleClick}>
          <i className={`fas ${icon}`}></i>
        </Card>
      </ReactCardFlip>
    </div>
  )
}

export default FlipCard;