import React, { Component } from 'react'; 
import { Link } from "react-router-dom";
import MaskedField from "react-masked-field"; 
import Heading from '../component/Heading'; 

import '../App.css'; 

class SignUpPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: "", 
            password: "", 
            firstName: "",
            lastName: "", 
            ssn: "", 
            insurerOptions: "", 
            planId: "", 
            dob: ""

        }

    }

    handleSubmit(event){
        event.preventDefault(); 
        
    }
    render(){
        return(
            <form 
                onSubmit={this.handleSubmit}
                className="sign-in-div"
                >
                <Heading 
                    headingText="Sign Up"
                    className="sign-up-heading"
                />
                    <input  placeholder="First Name" className="first-name-input" type="text" name="firstName" />
                    <input placeholder="Last Name" className="last-name-input" type="text" name="lastName" />
                    <input placeholder="Email Address" className="email-input" type="text" name="email" />
                    <input data-placeholder="Date of birth" className="dob-input" type="date" name="dob" />
                    <MaskedField mask="999-99-9999"/>
                    <input placeholder="XXX-XX-XXXX"  className="ssn-input" type="email" name="ssn" maxlength="12" />
                    <input placeholder="password" className="password-input" type="password" name="password" />

                <Link
                    className="sign-up-button"
                    to="/account"
                >
                Sign Up   
                </Link>
            </form>
        )
    }
}

export default SignUpPage; 
