import React, { Component } from 'react'
import '../App.css'
import {connect} from 'react-redux'
import {handleGetRequest} from '../redux/actions/userActions'

class Search extends Component {
    constructor(){
        super()
        this.state = {
            searchValue: ''
        }
    }
    onChange = e => {
        this.setState({
            searchValue: e.target.value
        })
    }
    onSubmit = e => {
        const {searchValue} = this.state
        e.preventDefault()
        //const searchTerm = e.target.elements.searchValue.value     second way of sending value of input to handleGetRequest function
        this.props.handleGetRequest(searchValue)
    }
    render() {
        return (
            <div className="search">
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="Enter username:"
                    autoComplete="off"
                    name="searchValue"
                    value={this.state.searchValue}
                    onChange={this.onChange}
                />
                <button>ADD</button>
            </form>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleGetRequest: userName => dispatch(handleGetRequest(userName))
    }
  }

  export default connect(null,mapDispatchToProps)(Search);