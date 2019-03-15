import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Start extends Component{
    render () {
        return (
            <div>
                <p>
                    Hier erscheint später die Startseite
                    <Link to="/Blog">Blog</Link>
                </p>
            </div>
        )
    }
}

export default Start;