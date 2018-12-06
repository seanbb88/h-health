import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Heading from '../component/Heading'; 
import Savings from '../component/Savings'; 

class UserAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "brian",
            email: "",
            dob: ""
        }
    }

    componentDidMount() {
        const cookies = new Cookies()
        let name = cookies.get('fullName');
        let email = cookies.get('email');
        let dob = cookies.get("dob");
        if (name === undefined){
            name="Brian"
        }
        this.setState({
            fullName: name,
            email: email,
            dob: dob
        })
    }

    render() {
        return (
            <div className="user-account-div">
                <div className="account-info-div">
                    <Heading
                        className="account-user-name"
                        headingText={`Welcome, ${this.state.fullName}`}
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

                </div>
            </div>
        )
    }
}

export default UserAccount; 