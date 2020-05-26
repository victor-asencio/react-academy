import React from "react";
import ReactDOM from 'react-dom'

export default function App() {
    return (
        <div>
            <h1 style={{color: 'red', fontWeight: 700}}>this is a header!</h1>
        </div>
    )
}


ReactDOM.render(<App/>,document.querySelector("#root"));