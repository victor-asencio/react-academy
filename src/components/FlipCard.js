import React from 'react';
import ReactCardFlip from 'react-card-flip';
import Card from './Card.js';

class FlipCard extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        isFlipped: false,
        resolved: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
      e.preventDefault();
      if(!this.state.resolved){
        this.setState(prevState => ({ 
          isFlipped: !prevState.isFlipped 
        }));
      }
      this.props.handleCardEvent(e);
    }
   
    render() {
      return (
        <div className="card-container">
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <Card color="card-back back-icon-hidden" onClick={this.handleClick}>
              <i className={`fas ${this.props.icon}`}></i>
            </Card>
        
            <Card color="card-front" onClick={this.handleClick}>
              <i className={`fas ${this.props.icon}`}></i>
            </Card>
          </ReactCardFlip>
        </div>
      )
    }
  }

  export default FlipCard;