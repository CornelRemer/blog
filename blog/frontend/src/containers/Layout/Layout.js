import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Hoc from '../../hoc/hoc';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Blog from '../Blog/Blog';
import Modal from '../../components/UI/Modal/Modal';
import LoginForm from '../../components/Login/LoginForm/LoginForm';
import Map from '../Map/Map';
import Start from '../Start/Start';
import DefaultLogin from '../DefaultLogin/DefaultLogin';
import PrivateRoute from '../../components/common/PrivateRoute';

import './Layout.css';
import axios from '../../axios';

class Layout extends Component {
    state = {
        showSideDrawer: false,
        loginModal:false,
        token: localStorage.getItem('token'),
        //token: null,
        isAuthenticated: null,
        isLoading: null,
        user: null
    }

    // Check token & load user
    //loadUser = () => {
    componentDidMount () {
        // User loading
        //this.setState({isLoading: true});

        // Get token from state
        //const token = this.getState().token;

        // Headers
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        
        axios.get('/api/auth/user', config)
            .then(response => {
                //console.log('Erfolgreich! Response:',response);
                const payload = response.data;
            })
            .catch(error => {
                //console.log('Fehler:', error);
                localStorage.removeItem("token");
            });

        // If token, add to headers config
        /*if(token) {
            config.headers['Authorization'] = `Token ${token}`;
        }*/
    }

    loginFunc = (username, password) => {
        // Headers
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        // Request Body
        const body = JSON.stringify({username, password});

        axios.post('/api/auth/login', body, config)
            .then(response => {
                //console.log('Login erfolgreich:',response);
                const payload = response.data;
                //console.log('Payload:', payload);
                localStorage.setItem('token', payload.token);
                this.setState({isAuthenticated: true, isLoading: false, user: payload.user.username, loginModal:false});
            })
            .catch(error => {
                //console.log('Login-Fehler:', error);
                localStorage.removeItem("token");
            });
    }

    logoutFunc = () => {
        // Headers
        const token = 'Token ' + localStorage.getItem('token');
        //console.log('MyToken:', token);
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        };

        // Request Body
        const username = this.state.user;
        //console.log('Username:', username);
        const body = JSON.stringify({username});

        axios.post('/api/auth/logout', body, config)
            .then(response => {
                //console.log('Logout war erfolgreich:',response);
                const payload = response.data;
                //console.log('Payload:', payload);
                localStorage.removeItem("token");
                this.setState({isAuthenticated: false, isLoading: false});
            })
            .catch(error => {
                console.log('Login-Fehler:', error);
            });
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    SideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !this.state.showSideDrawer}
        });
    }

    loginModalHandler = () => {
        this.setState({loginModal: true});
    }

    loginModalCancleHandler = () => {
        this.setState({loginModal: false});
    }

    render () {
        let modal = null
        if (this.state.loginModal) {
            modal =  <Modal cssStyle="Modal" show={this.state.loginModal} modalClosed={this.loginModalCancleHandler}>
                        <LoginForm loginClick={this.loginFunc}/>
                    </Modal>
        }
        return (
            <Hoc>
                {modal}
                <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler} loginModal={!this.state.isAuthenticated ? this.loginModalHandler : this.logoutFunc} loginStatus={this.state.isAuthenticated} />
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.SideDrawerClosedHandler}/>
                <div className="Layout">
                    <Route path="/" exact component={Start} />
                    <PrivateRoute loading={this.state.isLoading} auth={this.state.isAuthenticated} path="/Blog" component={Blog} defaultComponent={DefaultLogin} />
                    <Route path="/Map" exact component={Map} />
                </div>
            </Hoc>
        )
    }
}

export default Layout;