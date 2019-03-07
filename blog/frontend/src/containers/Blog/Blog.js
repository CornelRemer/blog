import React, { Component } from 'react';
import axios from '../../axios';

import './Blog.css';
import Post from '../../components/Blog/Post/Post';
import FullPost from '../../components/Blog/FullPost/FullPost';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        axios.get('/api/post')
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
            });
    }

    postSelectedHandler = (post) => {
        if (!post.postActive) {
            post.postActive= true
        }
        post.first = false
        this.setState({selectedPostId: post.id});
    }

    closeFullPost = (post) => {
        post.first = false
        post.postActive = false
        this.setState({selectedPostId: post.id});
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
                            openFullPost={() => this.postSelectedHandler(post)}
                            closeFullPost={() => this.closeFullPost(post)}/>
            } );
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
            </div>
        );
    }
}

export default Blog;