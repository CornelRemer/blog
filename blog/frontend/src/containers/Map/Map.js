import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import axios from '../../axios';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import { timingSafeEqual } from 'crypto';

class Map extends Component{
    state = {
        posts: [],
        loading: false,
        error: false,
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
        axios.get("/api/post", config)
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
                this.setState({posts: updatedPosts, loading: false});
            })
            .catch(error => {
                this.setState({error: true, loading: false});
                console.log('Fehler:',error);
            });
    }

    render () {
        let marker = this.state.posts.map( post => {
            if (post.location === null) {
                return null;
            }
            else {
                return (
                        <Marker
                            position={[post.location.coordinates[1], post.location.coordinates[0]]}
                            key={post.id}
                        >
                            <Popup>
                                {post.title}
                            </Popup>
                        </Marker>
                    )
            }
            
        } );
        return (
            <div className='leaflet-container'>
                <LeafletMap
                    center={[-25.274022, 133.775392]}
                    zoom={4}
                    maxZoom={18}
                    attributionControl={true}
                    zoomControl={true}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                    easeLinearity={0.35}
                >
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    {marker}
                </LeafletMap>
            </div>
            
        )
    }
}

export default Map; 