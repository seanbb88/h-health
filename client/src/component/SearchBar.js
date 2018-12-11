import _ from 'lodash';
import faker from 'faker';
import React, { Component } from 'react';
import { Search } from 'semantic-ui-react'

const source = _.times(1, () => ({
    title: "Annual Physical",
    description: "A physical examination helps your PCP to determine the general status of your health. The exam also gives you a chance to talk to them about any ongoing pain or symptoms that you're experiencing or any other health concerns that you might have.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Red_Cross_Icon_Reworked.jpg",
    price: faker.finance.amount(0, 100, 2, '$'),
}))


export default class SearchBar extends Component {
    componentWillMount() {
        this.resetComponent();
    }

    resetComponent = () => this.setState({
        isLoading: false,
        results: [],
        value: ''
    })

    handleResultsSelect = (e, { result }) => this.setState({ value: result.title })

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent()

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = result => re.test(result.title)

            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch),
            })
        }, 300)
    }

    render() {
        const { isLoading, value, results } = this.state

        return (

            <Search
                style={{ width: "100%" }}
                placeholder="Search a procedure"
                loading={isLoading}
                onResultSelect={this.handleResultsSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                results={results}
                value={value}
                {...this.props}
            />
        )
    }
}
