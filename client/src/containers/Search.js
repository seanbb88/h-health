import React, { Component } from 'react';



class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let searchTerm = event.target.value
        searchTerm += searchTerm
        console.log(searchTerm)
    }

    render() {
        return (
            <div className="ui search">
                <div className="ui icon input">
                    <input 
                        className="prompt" 
                        type="text" 
                        onChange={this.handleChange} 
                        value={this.state.searchTerm} 
                        placeholder="Search for a procedure">
                    </input>
                    <i className="search icon"></i>
                    <div className="results"></div>
                </div>
            </div>
        )
    }
}

export default Search;