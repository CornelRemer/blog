import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Map extends Component{
    render () {
        return (
            <div>
                <p>
                    Hier erscheint später eine Karte
                    <Link to="/">Blog</Link>
                </p>
            </div>
        )
    }
}

export default Map;