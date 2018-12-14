import React, { Component } from 'react';
import Heading from '../component/Heading';
import Savings from '../component/Savings';
import SearchBar from '../component/SearchBar';
// import SavingsCard from '../component/SavingsCard'; 
import GoogleMap from './GoogleMap'; 



class UserAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "Brian Dennehy",
            email: "Brian@Gmail.com",
            homeAddress: "401 N Walbash Ave, Chicago, IL 60611",
            workAddress: "320 N Morgan St, Chicago, IL 60607",
            dob: "05/19/1987",
            searchTerm: ""
        }


    }
    render() {
        return (
            <div className="user-account-div">
                <div className="account-info-div">
                    <Heading
                        className="account-user-name"
                        headingText={`Welcome, ${this.state.fullName}`}
                    />
                    <Heading
                        className="home-address"
                        headingText={`Home Address: ${this.state.homeAddress}`}
                    />
                    <Heading
                        className="work-address"
                        headingText={`Work Address: ${this.state.workAddress}`}
                    />

                    <Savings
                        savingsDiv="year-savings-div"
                        savingsNumber="year-savings-number"
                        savingsDesc="year-savings-desc"
                        savingsType="YTD savings (2018)"
                        actualSavings="$583.25"
                    />
                    <Savings
                        savingsDiv="total-savings-div"
                        savingsNumber="total-savings-number"
                        savingsDesc="total-savings-desc"
                        savingsType="Total Savings"
                        actualSavings="$1,895.63"
                    />
                </div>
                <div className="full-account-div">
                    <SearchBar />
                    {/* <SavingsCard /> */}
                    <GoogleMap />
                </div>
            </div>
        )
    }
}

export default UserAccount; 
