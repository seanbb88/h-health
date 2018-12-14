import React from 'react';

function HouseMarker() {
    return (
        <div className="dropup">
            <span class="fas fa-home house-marker dropdown-toggle marker-button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-hidden="true">
            </span>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li className="home-marker-dropup">Home Address: 1224 N Hooker St. Chicago, IL 60642</li>
            </ul>
        </div>
    )
}


export default HouseMarker; 