import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Map extends Component{
    render () {
        return (
            <div>
                <p>
                    Hier erscheint später eine Karte
                    <NavLink to="/">Blog</NavLink>
                </p>
            </div>
        )
    }
}

export default Map; 