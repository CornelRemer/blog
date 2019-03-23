import React from 'react';
import './LoginButton.css';

const LoginButton = (props) => {
    return (
        <li className="LoginButton" onClick={props.clicked}>
            <a>{!props.loginStatus ? "Login" : "Logout"}</a>
        </li>
    );
}

export default LoginButton;