import React, { Component } from 'react';

//import Hoc from '../../../hoc/hoc';
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

    render () {
        let loginErrorMessage = null;
        if (this.props.loginError) {
            loginErrorMessage = <p className="LoginError" >Fehler beim Login! Bitte überprüfe den Benutzernamen und das Passwort.</p>
        }
        return (
            <div
            className="LoginFormContainer">
                <p>Bitte logge Dich ein.</p>
                <div className= {this.props.loginError ? "InputLine LoginError" : "InputLine"}>
                    <label>Benutzername: </label>
                    <input type="text" onChange={(event) => (this.setState({username: event.target.value}))} />
                </div>

                <div className={this.props.loginError ? "InputLine LoginError" : "InputLine"}>
                    <label>Passwort: </label>
                    <input type="password" onChange={(event) => (this.setState({password: event.target.value}))} />
                </div>

                <button
                    type="submit"
                    onClick={() => {this.props.loginClick(this.state.username, this.state.password)}}
                    className="AnmeldeButton">
                        {this.state.showRegister ? "Anmelden" : "Login"}
                </button>
                {loginErrorMessage}
            </div>
        )
    }
}

export default LoginForm;