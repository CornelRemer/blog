import React, { Component } from 'react';

import './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem';

class NavigationItems extends Component{
    state = {
        activeItem: ''
    }

    changeActiveHandler = ( itemName ) => {
        this.setState({activeItem: itemName});
    }

    render () {
        return (
            <ul className="NavigationItems">
        <NavigationItem link="/" active={this.state.activeItem=== 'Start' ? true : false} clicked={this.changeActiveHandler} >Start</NavigationItem>
        <NavigationItem link="/Blog" active={this.state.activeItem=== 'Blog' ? true : false} clicked={this.changeActiveHandler} >Blog</NavigationItem>
        <NavigationItem link="/Map" active={this.state.activeItem=== 'Karte' ? true : false} clicked={this.changeActiveHandler} >Karte</NavigationItem>
    </ul>
        )
    }
}

export default NavigationItems;