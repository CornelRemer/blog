import React from 'react';

import './Post.css';

const post = (props) => {
    if (props.first) {
        //console.log(props.images[0].image);
        return (
                <div
                    className="Post"
                    style={{
                        backgroundImage: `url(${props.images[0].image})`,
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
                        backgroundImage: `url(${props.images[0].image})`,
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
                    <button onClick={props.openSlider}>Open Slider!!</button>
                </div>
            )
        }
    }
};

export default post;