import React from "react";
import './style.css';


function Button({ onClick, children }) {
    return (
        <button onClick={onClick}  className="myButton">
            {children}
        </button>
    );
}

export default Button;