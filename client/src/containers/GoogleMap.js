import React, { Component } from 'react'; 
import GoogleMapReact from 'google-map-react'; 
import GreenMarker from '../component/GreenMarker';
import RedMarker from '../component/RedMarker';  
import HouseMarker from '../component/HouseMarker';
import WorkMarker from '../component/WorkMarker';  


export default class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 41.919306,
            lng: -87.663004
        }, 
        zoom: 11

    }; 

    render(){
        return (
            <div className="map-div" style={{ height: '330px', width: '91%', marginBottom: '5px', marginTop: '5px'}}>
                <GoogleMapReact 
                    bootstrapURLKeys={{key: 'AIzaSyCDpd7u7nkCtrcdhOi-rKzAmRCBplfd87I'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                <HouseMarker 
                    lat={41.904857}
                    lng={-87.652869}
                />
                <WorkMarker 
                    lat={41.9693569}
                    lng={-87.65787}
                />
                <RedMarker 
                    lat={41.8936913}
                    lng={-87.6231417}
                    doctor="Ann C. Allie, MD"
                    address="259 E Erie St Ste 2230, Chicago, IL 60611"
                    phone="(312) 926-6000"
                    linkToWeb="https://www.nm.org/doctors/1619162955?utm_source=yext&utm_medium=gmb%20physician&utm_campaign=online%20listings"
                />
                <GreenMarker
                    lat={41.8873707}
                    lng={-87.6304408}
                    doctor="Dr. Kittu Garg"
                    address="Rubloff Building, 750 N Lake Shore, Chicago, IL 60611"
                    phone="(312) 503-6400"
                    linkToWeb="https://www.feinberg.northwestern.edu/faculty-profiles/az/profile.html?xid=35420"
                />
                </GoogleMapReact>
            </div>
        )
    }

}

 
