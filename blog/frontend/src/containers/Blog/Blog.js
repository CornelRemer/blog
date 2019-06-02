import React, { Component } from 'react';
import axios from '../../axios';

import './Blog.css';
import Post from '../../components/Blog/Post/Post';

import Modal from '../../components/UI/Modal/Modal';
import Slider from '../../components/Blog/Slider/Slider';

class Blog extends Component {
    state = {
        posts: [],
        error: false,
        sliderModal: false,
        currentPost: null
    }

    componentDidMount() {
        const token = 'Token ' + localStorage.getItem('token');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }
        console.log('Sende Request zu api/post/')

        axios.get('/api/post', config)
            .then(response => {
                //const posts = response.data.slice(0, 4); // // speichert die ersten vier posts
                const posts = response.data;
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        first: true,
                        postActive: false
                    }
                });
                console.log('empfangene Posts: ', updatedPosts);
                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                this.setState({error: true});
                console.log('Fehler:',error);
                console.log('Send config:',config);
            });
    }

    openFullPost = (post) => {
        const postIndex = this.state.posts.indexOf(post);
        let updatedPosts = this.state.posts;

        post.postActive= true
        post.first = false

        updatedPosts[postIndex] = post
        this.setState({posts: updatedPosts});
    }

    closeFullPost = (post) => {
        const postIndex = this.state.posts.indexOf(post);
        let updatedPosts = this.state.posts;

        post.first = false
        post.postActive = false

        updatedPosts[postIndex] = post
        this.setState({posts: updatedPosts});
    }

    sliderModalCancleHandler = () => {
        this.setState({sliderModal: false, currentPost: null});
    }

    openSlider = (post) => {
        console.log('öffne Slider Modal');
        this.setState({sliderModal: true, currentPost: post});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map( post => {
                return <Post 
                            key={post.id}
                            title={post.title}
                            summary={post.summary}
                            content={post.content}
                            images={post.images}
                            openSlider= {() => this.openSlider(post)}
                            first={post.first}
                            activate = {post.postActive}
                            openFullPost={() => this.openFullPost(post)}
                            closeFullPost={() => this.closeFullPost(post)}/>
            } );
        }

        let modal = null
        if (this.state.sliderModal) {
            modal =  <Modal cssStyle="SliderModal" show={this.state.sliderModal} modalClosed={this.sliderModalCancleHandler}>
                        <Slider post={this.state.currentPost/*post.images*/} />
                    </Modal>
        }

        return (
            <div>
                <section className="Posts">
                    {modal}
                    {posts}
                </section>
            </div>
        );
    }
}

export default Blog;