import React from 'react';
import './SideDrawer.css';

import Hoc from '../../../hoc/hoc';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';

const sidedrawer = ( props ) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }

    return (
        <Hoc>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems closeSideDrawer={props.closed}/>
                </nav>
            </div>
        </Hoc>
        
    )
};

export default sidedrawer;