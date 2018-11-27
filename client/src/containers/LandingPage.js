import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Heading from '../component/Heading';
import Description from '../component/Description'
import '../App.css';

class LandingPage extends Component {


    render() {
        return (
            <div className="landing-page">
                <Heading
                    className="logo"
                    headingText="VH"
                />
                <Heading
                    className="logo-heading"
                    headingText="Valued Health"
                />
                <Description
                    className="description-text"
                    descriptionText="Valued Health works with your insurance company to save you money!"
                />
                <Description
                    className="description-text"
                    descriptionText="By using Valued Health, you will see which preferred providers to use and get more money back in your pocket today!"
                />

                <Link
                    className="landing-button"
                    to="/signin">Click Here
            </Link>

            </div>
        )
    }

}

export default LandingPage; 