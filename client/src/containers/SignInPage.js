import React, { Component } from 'react'; 
import { Link } from "react-router-dom";
import Heading from '../component/Heading'; 

import '../App.css'; 

class SignInPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: "", 
            password: ""
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
                    headingText="Sign In"
                    className="sign-in-heading"
                />
                <Heading 
                    headingText="VH"
                    className="sign-in-logo"
                />
                <label className="email-label">
                    Email:
                    <input className="email-input" type="text" name="email" />
                </label>
                <label className="password-label">
                    Password:
                    <input className="password-input" type="password" name="password" />
                </label>
                <Link
                    className="sign-in-button"
                    to="/account"
                >
                Sign In    
                </Link>
                <Link
                    className="create-account-button"
                    to="/signup"
                >
                No account? Click to create
                </Link>
            </form>
        )
    }
}

export default SignInPage; 
