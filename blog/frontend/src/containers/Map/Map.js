import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import axios from '../../axios';
import { Map as LeafletMap, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import './Map.css';
import './Checkbox.css';
import Spinner from '../../components/Spinner/Spinner';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Modal from '../../components/UI/Modal/Modal';
import Slider from '../../components/Blog/Slider/Slider';
import L from 'leaflet';

class Map extends Component{
    state = {
        posts: [],
        routs: [],
        route_checkbox: false,
        loading: false,
        error: false,
        showPopupSidedrawer: false,
        currentPost: null,
        sliderModal: false,
        center: [-28.274022, 133.775392],
        zoom: 4
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
                        postActive: false,
                        images: post.images.sort((a, b) => (a.id > b.id) ? 1 : -1)
                    }
                });
                this.setState({posts: updatedPosts, loading: false});
            })
            .catch(error => {
                this.setState({error: true, loading: false});
                console.log('Fehler:',error);
            });

            /* Sende Request zu api/route/ */
        axios.get("/api/route", config)
        .then(response => {
            const routs = response.data;
            this.setState({routs: routs, loading: false});
        })
        .catch(error => {
            this.setState({error: true, loading: false});
            console.log('Fehler:',error);
        });
    }

    togglePopUpSidedrawer = (post) => {
        this.setState((prevState) => {
            return {showPopupSidedrawer: !this.state.showPopupSidedrawer, currentPost: post}
        });
    }

    closePopUpSidedrawer = () => {
        this.setState({showPopupSidedrawer: false, currentPost: null});
    }

    sliderModalCancleHandler = () => {
        /* schließt Slider Modal */
        this.setState({sliderModal: false});
    }

    openSlider = () => {
        /* öffne Slider Modal */
        this.setState({sliderModal: true});
    }

    sydButtonClickHandler = () => {
        let old_center = this.state.center[0];
        if (old_center == -33.854529) { 
            this.setState({center: [-33.854528, 151.224658], zoom: 12});
        }
        else {
            this.setState({center: [-33.854529, 151.224659], zoom: 12});
        }
    }

    strayaButtonClickHandler = () => {
        let old_center = this.state.center[0];
        if (old_center == -28.274022) {
            this.setState({center: [-28.274023, 133.775392], zoom: 4});
        }
        else {
            this.setState({center: [-28.274022, 133.775392], zoom: 4});
        }
    }

    tasButtonClickHandler = () => {
        let old_center = this.state.center[0];
        if (old_center == -42.115122) { 
            this.setState({center: [-42.115123, 146.709758], zoom: 7});
        }
        else {
            this.setState({center: [-42.115122, 146.709758], zoom: 7});
        }
    }

    changeCheckBoxHandler = () => {
        let old_checkBox_value = this.state.route_checkbox;
        this.setState({route_checkbox: !old_checkBox_value});
    }

    render () {
        let attachedClasses = ["popup-sidedrawer", "Close-popupSidedrawer"];
        if (this.state.showPopupSidedrawer) {
            attachedClasses = ["popup-sidedrawer", "Open-popupSidedrawer"];
        }
        let route = null;
        if (this.state.route_checkbox) {
                route = this.state.routs.map(rout => {
                return (
                    <Polyline
                            positions={L.GeoJSON.coordsToLatLngs(rout.route.coordinates,1)}
                            key={rout.id}
                            color='#2b82cb'
                            smoothFactor={1.0}
                            noClip={true}
                            weight={2}>
                            <Popup>
                                    <p>{rout.title}</p>
                                    <div>
                                        {rout.label}
                                    </div>
                            </Popup>
                    </Polyline>
                )
            });
        }
        
        

        let marker = this.state.posts.map( post => {
            let popup_img = null;
            if (post.location === null) {
                return null;
            }
            else {
                if (post.images.length > 0) {
                    popup_img = post.images[0].image;
                }
                return (
                        <Marker
                            position={[post.location.coordinates[1], post.location.coordinates[0]]}
                            key={post.id}
                        >
                            <Popup>
                                <p>{post.title}</p>
                                <div
                                    className="popup-img"
                                    style={{
                                        //backgroundImage: `url(${props.images[0].image})`,
                                        backgroundImage:  `url(${popup_img})`,
                                        backgroundSize: 'contain',
                                        backgroundPosition: '50% 60%',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                ></div>
                                <button
                                    onClick={() => this.togglePopUpSidedrawer(post)}
                                    className='toggleSidedrawerButton'>
                                        Zum Blogeintrag
                                </button>
                            </Popup>
                        </Marker>
                    )
            }
            
        } );

        if (!this.state.loading) {
            if (this.state.error) {
                marker = <p style={{textAlign: 'center'}}>Something went wrong</p>;
            }
        }
        else {
            marker = <Spinner />;
        }

        let modal = null;
        if (this.state.sliderModal) {
            modal =  <Modal cssStyle="SliderModal" show={this.state.sliderModal} modalClosed={this.sliderModalCancleHandler}>
                        <Slider post={
                            this.state.currentPost/*post.images*/}
                            closeSlider={() => this.sliderModalCancleHandler()}/>
                    </Modal>
        }

        let popupsidedrawerIMGbutton = null;
        if (this.state.showPopupSidedrawer) {
            if (this.state.currentPost.images.length > 0) {
                popupsidedrawerIMGbutton = <button
                    className="toggleSidedrawerButton"
                    onClick={this.openSlider}>
                    Bilder
                </button>
            }
        }


        return (
            <div>
                {modal}
                <div className='leaflet-container'>
                    <div className="zoomButtonContrainer">
                        <p style={{margin:0}}>Ansicht</p>
                        <div
                            className="zoomButton toggleSidedrawerButton"
                            onClick={this.sydButtonClickHandler}>
                            Sydney
                        </div>
                        <div
                            className="zoomButton toggleSidedrawerButton"
                            onClick={this.strayaButtonClickHandler}>
                            Australien
                        </div>
                        <div
                            className="zoomButton toggleSidedrawerButton"
                            onClick={this.tasButtonClickHandler}>
                            Tasmanien
                        </div>
                        <div>
                            <label class="container">Route
                                <input
                                    type="checkbox"
                                    defaultChecked={this.state.route_checkbox}
                                    onChange={this.changeCheckBoxHandler}/>
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
                
                    <div
                        className={attachedClasses.join(' ')}>
                            <div className="CloseButton" onClick={this.closePopUpSidedrawer}/>
                            <div className='popup-sidedrawer-contentBox'>
                                <p style={{fontWeight: 'bold', fontSize: '20px'}}>
                                    {this.state.showPopupSidedrawer ? this.state.currentPost.title : null}
                                </p>
                            </div>
                            
                            <div className='popup-sidedrawer-contentBox'>
                                <p className='showText'>
                                    {this.state.showPopupSidedrawer ? this.state.currentPost.content : null}
                                </p>
                            </div>

                            {popupsidedrawerIMGbutton}
                            
                    </div>
                    <Backdrop
                        zindex="popup-sidedrawer-zIndex"
                        show={this.state.showPopupSidedrawer}
                        clicked={this.closePopUpSidedrawer}
                    />
                    <LeafletMap
                        center={this.state.center}
                        zoom={this.state.zoom}
                        maxZoom={18}
                        minZoom={2}
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
                        {route}
                    </LeafletMap>
                </div>
            </div>
        )
    }
}

export default Map; 