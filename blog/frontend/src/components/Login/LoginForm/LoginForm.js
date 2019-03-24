import React, { Component } from 'react';

import Hoc from '../../../hoc/hoc';
import './LoginForm.css';

class LoginForm extends Component{
    state = {
        username: '',
        password: '',
        password2: '',
        email: '',
        showRegister: false
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

    showRegisterHandler = () => {
        const toggleRegister = this.state.showRegister;
        this.setState({showRegister: !toggleRegister});
    }

    render () {
        let username = '';
        let password = '';
        let password2 = '';
        let email = '';
        return (
            <Hoc>
                <h1 style={{textAlign: "center", cursor: "default"}}>Bitte einloggen.</h1>

                <div className={this.state.showRegister ? "InputLine" : "InputLineHide"}>
                    <label>E-mail: </label>
                    <input type="text" onChange={(event) => (email = event.target.value)} />
                </div>

                <div className="InputLine">
                    <label>Username: </label>
                    <input type="text" onChange={(event) => (username = event.target.value)} />
                </div>

                <div className="InputLine">
                    <label>Password: </label>
                    <input type="text" onChange={(event) => (password = event.target.value)} />
                </div>

                <div className={this.state.showRegister ? "InputLine" : "InputLineHide"}>
                    <label>Password 2: </label>
                    <input type="text" onChange={(event) => (password2 = event.target.value)} />
                </div>

                <button onClick={() => {this.props.loginClick(username, password)}} className="AnmeldeButton">{this.state.showRegister ? "Anmelden" : "Login"}</button>
                {/*<button onClick={() => {this.loginHandler(username,password, password2, email)}} className="AnmeldeButton">{this.state.showRegister ? "Anmelden" : "Login"}</button>*/}
                <div className="AnmeldeOption" onClick={this.showRegisterHandler}>{this.state.showRegister ? "(Login)" : "(Anmelden)"}</div>
            </Hoc>
        )
    }
}

export default LoginForm;