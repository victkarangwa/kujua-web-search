import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { searchKey } from '../redux/actions';
import { Link } from 'react-router-dom';
import Input from "./common/presentational/Input.jsx";
let userInput='';
export class Homepage extends Component {
    constructor(props) {
        super(props);

    }
handleChange (event){
    userInput = event.target.value;
    
}
    render() { 

        
        return (
          <div className='search-box-container'>
            <h1 className='center-header-txt'>Kujua</h1>
            <div className='search-box'>
              <Input
                data-test='search'
                type='text'
                id='search-input'
                placeholder="I'm searching for ..."
                handleChange={this.handleChange}
              />
              <Link
                data-test='search-btn'
                to='/search'
                className='search-link'
                onClick={() => this.props.searchKey(userInput)}
              >
                Search
              </Link>
            </div>
          </div>
        );
    }
}


export const mapStateToProps = (state) => ({
    query: state.query
});



export default connect(mapStateToProps, {searchKey})(Homepage);