import React, { Component } from 'react';
import axios from '../../axios';

import './Blog.css';
import Post from '../../components/Blog/Post/Post';

class Blog extends Component {
    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        const token = 'Token ' + localStorage.getItem('token');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }
        console.log('Sende Request! ############')

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

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map( post => {
                return <Post 
                            key={post.id}
                            title={post.title}
                            summary={post.summary}
                            content={post.content}
                            first={post.first}
                            activate = {post.postActive}
                            openFullPost={() => this.openFullPost(post)}
                            closeFullPost={() => this.closeFullPost(post)}/>
            } );
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
            </div>
        );
    }
}

export default Blog;