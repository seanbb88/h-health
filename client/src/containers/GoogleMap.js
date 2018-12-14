import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from '../component/Marker'; 


export default class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 41.8781,
            lng: -87.6298
        }, 
        zoom: 11
    }; 

    render(){
        return (
            <div className="map-div" style={{ height: '300px', width: '95%', marginBottom: '5px', marginTop: '5px'}}>
                <GoogleMapReact 
                    bootstrapURLKeys={{key: 'AIzaSyCDpd7u7nkCtrcdhOi-rKzAmRCBplfd87I'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                <Marker
                    lat={41.8781}
                    lng={-87.6298}
                />
                </GoogleMapReact>
            </div>
        )
    }

}

 


