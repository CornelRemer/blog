import React from 'react';
import './Footer.css';

import { NavLink } from "react-router-dom";

const footer = ( props ) => (
    <div className="Footer">
        <NavLink to="/Contact" exact>Contact</NavLink>
        <NavLink to="/Impressum" exact>Impressum</NavLink>
    </div>
)

export default footer;