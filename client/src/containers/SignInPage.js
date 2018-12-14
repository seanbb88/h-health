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

    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this); 

    }

    handleSubmit(event){
        event.preventDefault(); 
        if (this.state.email === "brian@gmail.com" && this.state.password ==="password"){
            this.props.history.push('/account')
        } else {
            alert("Incorrect User/Password Combo")
            document.getElementById("sign-in-form").reset()
        }
    }

    handleChange(event){
        const value = event.target.value
        const name = event.target.name 
        this.setState({
            [name] : value
        })
    }
    render(){
        return(
            <form
                onSubmit={this.handleSubmit}
                className="sign-in-div"
                id="sign-in-form"
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
                    <input 
                    className="email-input" 
                    type="text" 
                    name="email" 
                    onChange={this.handleChange} 
                    email={this.state.email} 
                />
                </label>
                <label className="password-label">
                    Password:
                    <input 
                        className="password-input" 
                        type="password" 
                        name="password" 
                        onChange={this.handleChange} 
                        password={this.state.password}/>
                </label>
                <input 
                    className="sign-in-button" 
                    type="submit" 
                    value="Sign In" 
                />
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
