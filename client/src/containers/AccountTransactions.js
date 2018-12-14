import React, { Component } from 'react';
import HistoryCard from '../component/HistoryCard'; 
import Heading from '../component/Heading'; 

class UserAccountTransactions extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
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
        )
    }
}

export default UserAccountTransactions; 
