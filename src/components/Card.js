import React from 'react'

export default class Card extends React.Component {

    cardClick = (e) => {
        e.preventDefault();
        this.props.onClick(this.props.index);
    }

    render() {

        let { children, color } = this.props;

        return (
            <div onClick={this.cardClick} className={`main__card main__card--${color}`}>
                {children}
            </div>
        )
    }
}
