import React from 'react';

import './Rightarrow.css';

const rightarrow = (props) => {
    return (
        <div className="circle" onClick={props.goToNextSlide}>
            <p>
                <i className="right"></i>
            </p>
        </div>
    )
};

export default rightarrow;