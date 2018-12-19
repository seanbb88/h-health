import React from 'react';

function HouseMarker() {
    return (
        <div className="dropup">
            <span className="fas fa-home house-marker dropdown-toggle marker-button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-hidden="true">
            </span>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li className="home-marker-dropup">Home Address: 1260 N Astor St. Chicago, IL 60610</li>
            </ul>
        </div>
    )
}


export default HouseMarker; 