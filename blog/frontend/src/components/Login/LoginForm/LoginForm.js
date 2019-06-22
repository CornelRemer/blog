import React, { Component } from 'react';

import Hoc from '../../../hoc/hoc';
import './LoginForm.css';

class LoginForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password2: '',
            email: '',
            showRegister: false
        };
    }

    /*state = {
        username: '',
        password: '',
        password2: '',
        email: '',
        showRegister: false
    }*/

    loginHandler = (username,password,password2, email) => {
        this.setState({
            username : username,
            password : password,
            password2: password2,
            email: email
        });
        if (this.state.showRegister) {
            console.log("Anmeldung als:", this.state.username);
        }
        else {
            console.log("Login als:", this.state.username);
        }
    }

    showRegisterHandler = () => {
        const toggleRegister = this.state.showRegister;
        this.setState({showRegister: !toggleRegister});
    }

    render () {
        let username = '';
        let password = '';
        let password2 = '';
        let email = '';
        const style = {
            fontFamily: "Courier New",
            fontSize: 20,
            fontWeight: "bold"
        }
        return (
            <Hoc>
                <p style={style}>Bitte logge Dich ein.</p>
                <div className={this.state.showRegister ? "InputLine" : "InputLineHide"}>
                    <label>E-mail: </label>
                    <input type="text" onChange={(event) => (email = event.target.value)} />
                </div>

                <div className= {this.props.loginError ? "ErrorInputLine" : "InputLine"}>
                    <label>Benutzername: </label>
                    <input type="text" onChange={(event) => (username = event.target.value)} />
                </div>

                <div className={this.props.loginError ? "ErrorInputLine" : "InputLine"}>
                    <label>Passwort: </label>
                    <input type="password" onChange={(event) => (password = event.target.value)} />
                </div>

                <div className={this.state.showRegister ? "InputLine" : "InputLineHide"}>
                    <label>Passwort 2: </label>
                    <input type="text" onChange={(event) => (password2 = event.target.value)} />
                </div>

                <button onClick={() => {this.props.loginClick(username, password)}} className="AnmeldeButton" style={style}>{this.state.showRegister ? "Anmelden" : "Login"}</button>
                <p className="LoginError" >{this.props.loginError ? "Fehler beim Login! Bitte überprüfe den Benutzernamen und das Passwort." : ""}</p>
                {/*<button onClick={() => {this.loginHandler(username,password, password2, email)}} className="AnmeldeButton">{this.state.showRegister ? "Anmelden" : "Login"}</button>*/}
                {/*<div className="AnmeldeOption" onClick={this.showRegisterHandler}>{this.state.showRegister ? "(Login)" : "(Anmelden)"}</div>*/}
            </Hoc>
        )
    }
}

export default LoginForm;