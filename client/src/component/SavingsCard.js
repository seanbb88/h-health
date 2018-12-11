
import React, { Component } from 'react';
import { LineChart, ColumnChart } from 'react-chartkick';

class SavingsCard extends Component {
    render() {
        return (
            <div className="savings-card">
                <div className="savings-card-line">
                    <LineChart data={{ "2017-05-13": 2, "2017-05-14": 5 }} />
                </div>
                <div className="savings-card-bar">
                    <ColumnChart data={[["In-Network", 40], ["Out-Network", 20]]} />
                </div>
            </div>
        )
    }
}

export default SavingsCard;

