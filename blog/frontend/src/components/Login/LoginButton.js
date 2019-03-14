import React from 'react';
import './LoginButton.css';

const LoginButton = (props) => {
    return (
        <li className="LoginButton" onClick={props.clicked}>
            <a>Login</a>
        </li>
    );
}

export default LoginButton;