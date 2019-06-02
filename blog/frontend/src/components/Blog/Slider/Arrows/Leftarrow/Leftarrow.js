import React from 'react';

import './Leftarrow.css';

const leftarrow = (props) => {
    return (
        <div className="circle" onClick={props.goToPrevSlide} >
            <p>
                <i className="left"></i>
            </p>
        </div>
    )
};

export default leftarrow;