import React, { Component } from 'react';
import axios from '../../../axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadetPost: null
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadetPost || (this.state.loadetPost && this.state.loadetPost.id !== this.props.id)) {
                axios.get('/api/post/' + this.props.id)
                    .then( response => {
                        this.setState({loadetPost: response.data});
                    }) ;
            }
        }
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post.</p>;
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
        }
        if (this.state.loadetPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadetPost.title}</h1>
                    <p>{this.state.loadetPost.content}</p>
                    <div className="Edit">
                        <button onClick={() => console.log("Button was clicked")} className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;