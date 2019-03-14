import React, { Component } from 'react';

import Hoc from '../../hoc/hoc';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Blog from '../Blog/Blog';
import Modal from '../../components/UI/Modal/Modal';
import LoginForm from '../../components/Login/LoginForm/LoginForm';

import './Layout.css';

class Layout extends Component {
    state = {
        showSideDrawer: false,
        loginModal:false
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
        return (
            <Hoc>
                <Modal show={this.state.loginModal} modalClosed={this.loginModalCancleHandler}>
                    <LoginForm />
                </Modal>
                <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler} loginModal={this.loginModalHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.SideDrawerClosedHandler}/>
                <div className="Layout">
                    <Blog />
                </div>
            </Hoc>
        )
    }
}

export default Layout;