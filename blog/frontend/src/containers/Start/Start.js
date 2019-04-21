import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import './Start.css';

class Start extends Component{
    render () {
        return (
            <div className="Bild">
                <p>
                    Hier erscheint später die Startseite
                    <NavLink to="/Blog">Blog</NavLink>
                </p>
                <img src="/static/img/poke.png" width="30" height="30"/>
            </div>
        )
    }
}

export default Start;