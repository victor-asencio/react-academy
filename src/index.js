import React from "react";
import ReactDOM from 'react-dom';
import Header from './components/Header.js';
import CardGrid from './components/CardGrid.js';


import './style/reset.css';
import './style/index.css';

export default function App() {
  console.log("render index")
    return (
        <div className="main">
          <Header/>
          <CardGrid/>
        </div>
    )
}


ReactDOM.render(<App/>,document.querySelector("#root"));