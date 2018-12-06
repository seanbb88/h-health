import React from 'react'; 
import { Map, GoogleApiWrapper} from 'google-maps-react';


const mapStyles = {
    width: '100%', 
    height: '100%'
}

function MapContainer(props){
    return (
        <Map 
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
                lat: -1.2884, 
                lng: 36.8233
            }}
        />
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCLufwSFtwEt5U6dqfV0c6YDZfUUvf9HcY'
})(MapContainer); 
