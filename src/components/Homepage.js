import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { searchKey } from '../redux/actions';
import { Link } from 'react-router-dom';
import Input from "./common/presentational/Input.jsx";
let userInput='';
class Homepage extends Component {
    constructor(props) {
        super(props);

    }
handleChange ({target}){
    userInput = target.value;
    
}
    render() { 

        
        return (
            <div className="search-box-container">
                <h1 className="center-header-txt">Kujua</h1>
                <div className="search-box">
                    <Input
                        type="text"
                        id="search-input"
                        placeholder="I'm searching for ..."
                        handleChange={this.handleChange}
                    />
                    <Link
                        to='/search'
                        className='search-link'
                        onClick={() => this.props.searchKey(userInput)}
                    >Search</Link>
                    
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    query: state.query
});



export default connect(mapStateToProps, {searchKey})(Homepage);