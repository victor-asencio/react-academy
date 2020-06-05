import React, { Component } from "react";

import '../styles/SearchBar.scss';

class SearchBar extends Component {
  
    state = {
        value: '',
    }
  
    onChangeInput = e => {
        this.setState({
            value: e.target.value,
        });
    }

    onFormSumbit = e => {
        e.preventDefault();
        this.props.onTermSubmit(this.state.value);
        // TODO: Make sure we call callback from parent component
    }
    render() {

    return (
      <header className='header'>
        <form onSubmit={this.onFormSumbit} className='header__form'>
          <label className='header__label-text' htmlFor='search-input'>Video Search</label>
          <input className='header__input' value={this.state.value} onChange={this.onChangeInput} placeholder='Nombre...' id='search-input' type='text' autoComplete='off'></input>
        </form>
      </header>
    );
  }
}

export default SearchBar;
