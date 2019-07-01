import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Map extends Component{
    render () {
        return (
            <div>
                <p id="DefaultLogin">
                    Hier erscheint später eine Karte. Zurück zum <NavLink to="/">Start</NavLink>
                </p>
            </div>
        )
    }
}

export default Map; 