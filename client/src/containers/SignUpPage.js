import React, { Component } from 'react';
import Heading from '../component/Heading';
import Icon from '../component/Icon';


import '../App.css';

class SignUpPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            fullName: "",
            ssn: "",
            password2: "",
            dob: ""

        }
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(event) {
        event.preventDefault();
       
        this.props.history.push('/account')
    }

    handleChange(event){
        const value = event.target.value
        const name = event.target.name 
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="sign-in-div"
            >
                <Heading
                    className="logo-signup"
                    headingText="VH"
                />
                <Heading
                    headingText="Sign Up"
                    className="sign-up-heading"
                />
                <Icon class="fas fa-male person-icon" />
                <Icon class="fas fa-envelope-open email-icon" />
                <Icon class="fas fa-lock ssn-icon" />
                <Icon class="fas fa-key password-icon" />
                <Icon class="far fa-calendar-alt dob-icon" />
                <input 
                    name="fullName"
                    placeholder="Full Name" 
                    className="full-name-input" 
                    onChange={this.handleChange} 
                    type="text" 
                    fullname={this.state.fullName} 
                    required 
                />
                <input 
                    name="email"
                    placeholder="Email Address" 
                    className="signup-email-input" 
                    onChange={this.handleChange} 
                    type="text" 
                    email={this.state.email} 
                    required 
                />
                <input 
                    name="dob"
                    data-placeholder="Date of birth" 
                    className="dob-input" 
                    onChange={this.handleChange} 
                    type="date" 
                    dob={this.state.dob} 
                    required 
                />
                <input 
                    name="ssn"
                    className="ssn-input"
                    max="12"
                    onChange={this.handleChange}
                    ssn={this.state.ssn}
                    required
                />
                <input 
                    name="password"
                    placeholder="password" 
                    className="signup-password-input" 
                    type="password" 
                    onChange={this.handleChange} 
                    password={this.state.password} 
                    required 
                />
                <input 
                    name="password2"
                    placeholder="confirm password" 
                    className="signup-password-confirm" 
                    onChange={this.handleChange} 
                    type="password" 
                    password2={this.state.password2} 
                    required 
                />
                <input 
                    className="sign-up-button" 
                    type="submit" 
                    value="Sign Up" 
                />
            </form>
        )
    }
}

export default SignUpPage; 