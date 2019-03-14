import React from 'react';
import './Toolbar.css';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';
import LoginButton from '../../Login/LoginButton';

const toolbar = ( props ) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
        <nav>
            <LoginButton clicked={props.loginModal}/>
        </nav>
    </header>
)

export default toolbar;