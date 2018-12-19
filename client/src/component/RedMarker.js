import React, { Component } from 'react'; 
import Icon from './Icon'; 
import ATag from './ATag'; 

class RedMarker extends Component {
    render(){
        return(
                     <div className="dropup">
             <span class="fas fa-map-marker-alt red-marker dropdown-toggle marker-button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-hidden="true">
             </span>
             <ul className="dropdown-menu green-dropup" aria-labelledby="dropdownMenu2">
                 <li className="doctor-name-dropup">{props.doctor}</li>
                 <li className="address-dropdown">{props.address}</li>
                 <li><Icon class="fas fa-phone dropup-icon" />{` - ${props.phone}`}</li>
                 <li className="website-dropup"><Icon class="fas fa-desktop dropup-icon" /><ATag webLink={props.linkToWeb}/></li>
             </ul>
         </div>
        )
    }
}

export default RedMarker; 










// import React from 'react';
// import Icon from './Icon'; 
// import ATag from './ATag'; 

// function RedMarker(props) {
//     return (
//         <div className="dropup">
//             <span class="fas fa-map-marker-alt red-marker dropdown-toggle marker-button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-hidden="true">
//             </span>
//             <ul className="dropdown-menu green-dropup" aria-labelledby="dropdownMenu2">
//                 <li className="doctor-name-dropup">{props.doctor}</li>
//                 <li className="address-dropdown">{props.address}</li>
//                 <li><Icon class="fas fa-phone dropup-icon" />{` - ${props.phone}`}</li>
//                 <li className="website-dropup"><Icon class="fas fa-desktop dropup-icon" /><ATag webLink={props.linkToWeb}/></li>
//             </ul>
//         </div>
//     )
// }


// export default RedMarker; 