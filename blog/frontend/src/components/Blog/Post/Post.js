import React from 'react';

import './Post.css';

const post = (props) => {
    let start_image = null;
    let imagebutton = null;
    if (props.images.length > 0) {
        start_image = props.images[0].image;
        imagebutton = <button className="OpenSliderButton" onClick={props.openSlider}>Bilder</button>
    }
    else {
    }
    if (props.first) {
        return (
                <div
                    className="Post"
                    style={{
                        //backgroundImage: `url(${props.images[0].image})`,
                        backgroundImage:  `url(${start_image})`,
                        backgroundSize: 'contain',
                        backgroundPosition: '50% 60%',
                        backgroundRepeat: 'no-repeat'
                    }}
                    onClick={props.openFullPost}>
                    <p className="PostTitle">{props.title}</p>                    
                </div>
            )
    }
    else {
        if (!props.activate) {
            return (
                <div
                    className="Post close"
                    style={{
                        //backgroundImage: `url(${props.images[0].image})`,
                        backgroundImage:  `url(${start_image})`,
                        backgroundSize: 'contain',
                        backgroundPosition: '50% 60%',
                        backgroundRepeat: 'no-repeat'
                    }}
                    onClick={props.openFullPost}>
                    <p className="PostTitle">{props.title}</p>
                </div>
            )
        }
        else {
            return (
                <div className="Post open">
                    <div className="CloseButton" onClick={props.closeFullPost}/>
                    <p style={{fontWeight: 'bold'}}>{props.title}</p>
                    <p className="showText">{props.content}</p>
                    {imagebutton}
                </div>
            )
        }
    }
};

export default post;