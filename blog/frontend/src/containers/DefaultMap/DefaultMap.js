import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import './DefaultMap.css';

class Map extends Component{
    state = {
        posts: [],
        loading: false,
        error: false,
        showPopupSidedrawer: false,
        currentPost: null,
        sliderModal: false
    }



    render () {
        return (
            <div className='leaflet-container'>
                    <Backdrop
                        zindex="popup-sidedrawer-zIndex"
                        show={true}
                        clicked={null}/>
                    <p className="DefaultMapMessage">Bitte logge Dich ein</p>
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
                    </LeafletMap>
            </div>
        )
    }
}

export default Map; 