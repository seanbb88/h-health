import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import Heading from '../component/Heading';
import Savings from '../component/Savings';
import HistoryCard from '../component/HistoryCard';


const searchArray = [];  

class UserAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "brian",
            email: "",
            dob: "",
            searchTerm: ""
        }

       
    }

    componentDidMount() {
        const cookies = new Cookies()
        let name = cookies.get('fullName');
        let email = cookies.get('email');
        let dob = cookies.get("dob");
        if (name === undefined) {
            name = "Brian"
        }
        this.setState({
            fullName: name,
            email: email,
            dob: dob
        })
    }

        

    handleChange(event){
        const name = event.target.value
        searchArray.push(name)
        console.log(searchArray)
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
                    <div className="half-account-div">
                        <Heading className="savings-history" headingText="Transaction History" />
                        <HistoryCard
                            procedure="Physical"
                            docType="Primary Care Doctor"
                            savingsNum="15.89"
                        />
                        <HistoryCard
                            procedure="Eye Exam"
                            docType="Osteopathic Medicine"
                            savingsNum="9.63"
                        />
                        <HistoryCard
                            procedure="Soft Tissue Repair"
                            docType="Orthopedic Surgeon"
                            savingsNum="568.92"
                        />
                        <HistoryCard
                            procedure="Lab Test"
                            docType="Laboratory Physician"
                            savingsNum="23.68"
                        />
                        <HistoryCard
                            procedure="Colonoscopy"
                            docType="Gastroenterologist"
                            savingsNum="105.36"
                        />
                        <HistoryCard
                            procedure="Dental Cleaning"
                            docType="Dental Hygienist"
                            savingsNum="8.58"
                        />
                    </div>
                    <div className="half-account-div2">
                        <div className="search-div">
                            <div className="ui search">
                                <div className="ui icon input">
                                    <input
                                        className="prompt procedure-search"
                                        type="text"
                                        onChange={this.handleChange}
                                        value={this.state.searchTerm}
                                        placeholder="Search for a procedure">
                                    </input>
                                    <i className="search icon"></i>
                                    <div className="results"></div>
                                </div>
                            </div>
                        </div>
                        <div className="maps-div">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserAccount; 