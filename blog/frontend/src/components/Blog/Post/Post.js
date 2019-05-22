import React from 'react';

import './Post.css';

const post = (props) => {
    if (props.first) {
        return (
                <article className="Post" onClick={props.openFullPost}>
                    <h1>{props.title}</h1>
                    <div>
                        <div className="Summary">{props.summary}</div>
                    </div>
                </article>
            )
    }
    else {
        if (!props.activate) {
            return (
                <article className="Post close" onClick={props.openFullPost}>
                    <h1>{props.title}</h1>
                    <div>
                        <div className="Summary">{props.summary}</div>
                    </div>
                </article>
            )
        }
        else {
            return (
                <article className="Post open">
                <div>
                    <div className="CloseButton" onClick={props.closeFullPost}/>
                    <h1>{props.title}</h1>
                </div>
                    <div>
                        <div className="Summary">{props.summary}</div>
                    </div>
                    <div>
                        <div className="Content showText">{props.content}</div>
                    </div>
                    <div className="Images">
                        <img src={props.image}/>
                    </div>
                </article>
            )
        }
    }
    
    
};

export default post;