import React from 'react';

import './NavigationItems.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active={true} >Start</NavigationItem>
        <NavigationItem link="/" >Blog</NavigationItem>
        <NavigationItem link="/" >Karte</NavigationItem>
        <NavigationItem link="/" >Sonstiges</NavigationItem>
    </ul>
);

export default navigationItems;