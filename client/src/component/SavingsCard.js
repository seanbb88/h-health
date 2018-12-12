
import React, { Component } from 'react';
import { LineChart, ColumnChart } from 'react-chartkick';

class SavingsCard extends Component {
    render() {
        return (
            <div className="savings-card">
                <div className="savings-card-line">
                    <LineChart 
                        data={{ "2018-01-08": 2,
                                "2018-01-16": 5,
                                "2018-04-05": 2,
                                "2018-06-14": 5,
                                "2018-08-01": 2,
                                "2018-08-08": 5,
                                "2018-10-13": 2,
                                "2018-11-22": 5
                                 }}
                        width="500px"
                        height="300px"
                        prefix="$"
                     />
                </div>
                <div className="savings-card-bar">
                    {/* <ColumnChart data={[["In-Network", 40], ["Out-Network", 20]]} /> */}
                </div>
            </div>
        )
    }
}

export default SavingsCard;

