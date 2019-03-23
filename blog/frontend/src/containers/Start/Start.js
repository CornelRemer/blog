import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Start extends Component{
    render () {
        return (
            <div>
                <p>
                    Hier erscheint später die Startseite
                    <NavLink to="/Blog">Blog</NavLink>
                </p>
            </div>
        )
    }
}

export default Start;