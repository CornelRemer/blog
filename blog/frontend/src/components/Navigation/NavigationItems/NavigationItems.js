import React, { Component } from 'react';

import './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem';

class NavigationItems extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeItem: ''
        };
    }

    changeActiveHandler = ( itemName ) => {
        this.setState({activeItem: itemName});
    }

    render () {
        return (
            <ul className="NavigationItems">
                <NavigationItem
                    link="/"
                    active={this.state.activeItem=== 'Start' ? true : false}
                    clicked={this.changeActiveHandler}
                    closeSideDrawer={this.props.closeSideDrawer}>
                    Start
                </NavigationItem>

                <NavigationItem
                    link="/Blog"
                    active={this.state.activeItem=== 'Blog' ? true : false}
                    clicked={this.changeActiveHandler}
                    closeSideDrawer={this.props.closeSideDrawer}>
                    Blog
                </NavigationItem>

                <NavigationItem
                    link="/Map"
                    active={this.state.activeItem=== 'Karte' ? true : false}
                    clicked={this.changeActiveHandler}
                    closeSideDrawer={this.props.closeSideDrawer}>
                    Karte
                </NavigationItem>
            </ul>
        )
    }
}

export default NavigationItems;