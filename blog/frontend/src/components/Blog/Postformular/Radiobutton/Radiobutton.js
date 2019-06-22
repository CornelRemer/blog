import React from 'react';
import './Radiobutton.css';

const radiobutton = ( props ) => (
    <label className="Radiobutton">
        <input
            type="radio"
            name="year"
            value={props.year}
            checked={props.checked === props.year}
            onChange={() => (props.changeRadioButtonHandler(props.year))}
        />
        {props.year}
    </label>
);

export default radiobutton;