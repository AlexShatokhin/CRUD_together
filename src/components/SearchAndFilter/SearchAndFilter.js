import { Component } from "react";

import Filter from '../Filter/Filter';

import "./SearchAndFilter.css"

class SearchAndFilter extends Component{
    constructor(props){
        super(props)
        this.state = {
            searchText: ""
        }
    }

    onChangeInput = (event) => {
        this.setState({
            searchText: event.target.value
        })
        this.props.onChangeSearchInput(event.target.value);
    }

    render(){
        return(
            <div className="logic_components">
                <Filter onChangeFilter = {this.props.onChangeFilter} />
                <input onChange={this.onChangeInput} value = {this.state.searchText} type="text" className="search_employer" placeholder='Type name of employer...'/>
            </div>
        )
    }
}

export default SearchAndFilter