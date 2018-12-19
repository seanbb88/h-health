import React, { Component } from 'react';
import _ from 'lodash';
import faker from 'faker';
import Icon from '../component/Icon';
import Heading from '../component/Heading';
import Savings from '../component/Savings';
import GoogleMap from './GoogleMap';

import { Search } from 'semantic-ui-react';


const source = _.times(1, () => ({
    title: "Annual Physical",
    description: "A physical examination helps your PCP to determine the general status of your health. The exam also gives you a chance to talk to them about any ongoing pain or symptoms that you're experiencing or any other health concerns that you might have.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Red_Cross_Icon_Reworked.jpg",
    price: faker.finance.amount(0, 100, 2, '$'),
}))

class UserAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: "Brian Dennehy",
            homeAddress: '401 N Walbash Ave, Chicago, IL 60611',
            workAddress: '1106 W Lawrence Ave, Chicago, IL 60640',
            value: "",
            isHovering: false,
            showHideMap: 'map-div-hidden',
            
        }

    }

    componentDidMount() {
        this.resetComponent();
    }

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })
        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent()
            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = result => re.test(result.title)
            this.setState({
                results: _.filter(source, isMatch),
            })
        }, 300)
    }

    resetComponent = () => this.setState({
        value: ''
    })

    handleResultsSelect = (e, { result }) => {
        this.setState({ value: result.title })
        
        setTimeout(() => {
            if (this.state.value === "Annual Physical"){
                console.log("hi")
                this.setState({
                    showHideMap: "map-div"
                })
            } else {
                return 
            }
        }, 2000)

    }

    render() {
        const { isLoading, value, results } = this.state
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
                    <Icon className="fas fa-chevron-left back-btn" />
                    <Icon className="fas fa-home home-btn" />

                    <Search
                        style={{ width: "100%", marginLeft: '75px' }}
                        placeholder="Search a procedure"
                        loading={isLoading}
                        onResultSelect={this.handleResultsSelect}
                        onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                        results={results}
                        value={value}
                        {...this.props}
                    />
                    <GoogleMap className={this.state.showHideMap} />
                </div>

            </div>
        )
    }
}

export default UserAccount;