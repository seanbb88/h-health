import React from 'react';

function WorkMarker() {
    return (
        <div className="dropup">        
            <span className="fas fa-building work-marker dropdown-toggle marker-button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-hidden="true">
            
            </span>
            
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li className="work-marker-dropup">Work Address: 1506, 5550 S Greenwood Ave, Chicago, IL 60637</li>
            </ul>
        </div>
    )
}


export default WorkMarker; 