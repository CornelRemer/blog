import React from 'react';
import './NavigationItem.css';

import { Link } from "react-router-dom";

const navigationItem = ( props ) => (
    <li className="NavigationItem">
        <a 
             onClick={() => {props.clicked(props.children)}}
            className={props.active ? "active" : null}>
            <Link to={props.link}>
                {props.children}
            </Link>
        </a>
    </li>
);

export default navigationItem;