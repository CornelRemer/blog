import React, { Component } from 'react';
import axios from '../../axios';

import './Blog.css';
import Postformular from '../../components/Blog/Postformular/Postformular';
import Post from '../../components/Blog/Post/Post';

import Modal from '../../components/UI/Modal/Modal';
import Slider from '../../components/Blog/Slider/Slider';
import Spinner from '../../components/Spinner/Spinner';

class Blog extends Component {
    state = {
        posts: [],
        loading: false,
        error: false,
        sliderModal: false,
        currentPost: null,
        selectedYear: new Date().getFullYear(),
        selectedMonth: new Date().getMonth() +1,
        months : ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
    }

    componentDidMount() {
        this.setState({loading: true});
        const token = 'Token ' + localStorage.getItem('token');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }

        /* Sende Request zu api/post/ */
        axios.get("/api/post?month=" + this.state.selectedMonth + "&year=" + this.state.selectedYear, config)
            .then(response => {
                //const posts = response.data.slice(0, 4);  // speichert die ersten vier posts
                const posts = response.data;
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        first: true,
                        postActive: false
                    }
                });
                //console.log('empfangene Posts: ', updatedPosts);
                this.setState({posts: updatedPosts, loading: false});
            })
            .catch(error => {
                this.setState({error: true, loading: false});
                console.log('Fehler:',error);
                //console.log('Send config:',config);
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
        /* schließt Slider Modal */
        this.setState({sliderModal: false, currentPost: null});
    }

    openSlider = (post) => {
        /* öffne Slider Modal */
        this.setState({sliderModal: true, currentPost: post});
    }

    changeRadioButtonHandler = ( year ) => {
        this.setState({selectedYear: year})
    }

    sendQueryRequest = () => {
        this.setState({loading: true});
        const token = 'Token ' + localStorage.getItem('token');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }

        /* Sende Request zu api/post/ */
        axios.get("/api/post?month=" + this.state.selectedMonth + "&year=" + this.state.selectedYear, config)
            .then(response => {
                const posts = response.data;
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        first: true,
                        postActive: false
                    }
                });
                this.setState({posts: updatedPosts, loading: false});
            })
            .catch(error => {
                this.setState({error: true, loading: false});
                console.log('Fehler:',error);
            });
    }

    getSelectedMonth = (selectedMonth) => {
        this.setState({selectedMonth: selectedMonth});
    }

    render () {
        let posts = this.state.posts.map( post => {
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
                        closeFullPost={() => this.closeFullPost(post)} />
        } );
        //let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>;
        if (!this.state.loading) {
            if (!this.state.error) {
                if (this.state.posts.length === 0) {
                    posts = <p>Hoppla...für {this.state.months[this.state.selectedMonth -1]} {this.state.selectedYear} existieren keine Einträge.</p>;
                }
            }
            else {
                posts = <p style={{textAlign: 'center'}}>Something went wrong</p>;
            }
        }
        else {
            posts = <Spinner />;
        }

        let modal = null
        if (this.state.sliderModal) {
            modal =  <Modal cssStyle="SliderModal" show={this.state.sliderModal} modalClosed={this.sliderModalCancleHandler}>
                        <Slider post={
                            this.state.currentPost/*post.images*/}
                            closeSlider={() => this.sliderModalCancleHandler()}/>
                    </Modal>
        }

        return (
            <div>
                <Postformular
                    selectedYear={this.state.selectedYear}
                    months={this.state.months}
                    changeRadioButtonHandler={this.changeRadioButtonHandler}
                    getSelectedMonth={this.getSelectedMonth}
                    sendQueryRequest={() => this.sendQueryRequest()}
                />
                <section className="Posts">
                    {modal}
                    {posts}
                </section>
            </div>
        );
    }
}

export default Blog;