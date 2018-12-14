import React from 'react';

function Marker() {
    return (
        <div className="dropup">

            <span class="glyphicon glyphicon-triangle-bottom pin-marker dropdown-toggle marker-button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-hidden="true">
            
            </span>
            
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><a href="google.com">Info Here</a></li>
                <li><a href="google.com">MOre Info</a></li>
                <li><a href="google.com">Something else here</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="google.com">Separated link</a></li>
            </ul>
        </div>
    )
}


export default Marker; 