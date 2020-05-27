import React from 'react';
import ReactCardFlip from 'react-card-flip';
import Card from './Card.js';

class FlipCard extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        isFlipped: false,
        resolved: false,
        lockClick: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
   
    /**
     * Esta acción se llama luego de la lógica en CardGrid
     * Se llama cada vez que se clickea una card
     * Eso me dice si la carta esta resuelta y tengo que bloquearla o flipearla de vuelta
     * @param {String} action 
     */
    nextAction(action){
      if(action==="resolved"){
        this.setState({
          resolved : true
        }) 
      } else {
        this.setState({
          lockClick : true
        })
        setTimeout(()=>{
          this.setState({
            isFlipped : !this.state.isFlipped,
            lockClick : false
          })
        }, 1000)
        
      }
    }

    handleClick(e) {
      e.preventDefault();

      let props = this.props,
          id = props.id;
      console.log("lock click: ",this.state.lockClick)
          
      if(!this.state.resolved && !this.state.isFlipped ){
        this.setState(prevState => ({ 
          isFlipped: !prevState.isFlipped 
        }));
        
        this.props.handleCardEvent({
          nextAction : this.nextAction.bind(this),
          id
        });
      }
    }
   
    render() {
      console.log("render flip card")
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