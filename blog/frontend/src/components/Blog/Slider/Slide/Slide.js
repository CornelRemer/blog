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
    let caption = null;
    if (props.image.caption) {
        caption = 
        <div className="Caption">
            <p>{props.image.caption}</p>
        </div>;
    }
    return (
        <div className="Slide" style={styles} >
            {caption}
        </div>
    )
};

export default slide; 