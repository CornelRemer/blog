import React from 'react';

import './Slide.css';

const slide = (props) => {
    const styles = {
        backgroundImage: `url(${props.image.image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%',
        backgroundColor: 'black'
    }
    return (
        <div className="Slide" style={styles} ></div>
    )
};

export default slide; 