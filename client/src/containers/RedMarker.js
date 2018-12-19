import React, { Component } from 'react'; 
import Icon from '../component/Icon'; 
import ATag from '../component/ATag'; 

 

class RedMarker extends Component {
    constructor(props){
        super(props); 
        this.state = {
            isHovering: false, 
            doctor: props.doctor,
            phone: props.phone, 
            linkToWeb: props.linkToWeb, 
            address: props.address,
            googlePlusCode: props.googlePlusCode,
            averageCustomerRating: props.averageCustomerRating,
            valuedRating: props.valuedRating,
            reimburseAmt: props.reimburseAmt,
            costSavingsIncentive: props.costSavingsIncentive

        }

        this.handleMouseHover = this.handleMouseHover.bind(this)
        
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
        console.log(this.state.isHovering)
      }
    
      toggleHoverState(state) {
        return {
          isHovering: !state.isHovering,
        };
      }

    render(){
        
        return (
       
         <div className="dropup">
             <span
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}  
                className="fas fa-map-marker-alt red-marker dropdown-toggle marker-button" 
                id="dropdownMenu2" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false" 
                aria-hidden="true">
             </span> 
             <ul className="dropdown-menu green-dropup" aria-labelledby="dropdownMenu2">
                 <li className="doctor-name-dropup">{this.state.doctor}</li>
                 <li className="address-dropdown">{this.state.address}</li>
                 <li><Icon className="fas fa-phone dropup-icon" />{` - ${this.state.phone}`}</li>
                 <li className="website-dropup"><Icon className="fas fa-desktop dropup-icon" /><ATag webLink={this.state.linkToWeb}/></li>
                 <li className="googleplus-dropup">{`Google Plus Code: ${this.state.googlePlusCode}`}</li>
                 <li role="separator" className="divider"></li>
                 <li className="average-customer-heading">Average Customer Rating</li>
                 <li className="valued-rating-heading">Valued Health Rating</li>
                 <li className="cost-savings-heading">Cost Savings Incentive</li>
                 <li className="reimbursment-heading">Reimbursment Amount</li>
                 <li className="customer-rating-dropup">{`${this.state.averageCustomerRating}`}</li>
                 <li className="valued-rating-dropup">{`${this.state.valuedRating}`}</li>
                 <li className="savings-dropup">{`${this.state.costSavingsIncentive}`}</li>
                 <li className="reimburse-dropup">{`${this.state.reimburseAmt}`}</li>
             </ul>
         </div>
    
        )
    }
}

export default RedMarker; 
