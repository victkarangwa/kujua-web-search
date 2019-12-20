import React, { Component } from "react";
import { connect } from 'react-redux';
import { searchKey, queryResults, queryLink} from '../redux/actions';
import Input from "./common/presentational/Input.jsx";
import SingleResult from './common/presentational/SingleResult.jsx'
import Spinner from './common/spinner.jsx';
import Homepage from './Homepage';

class Results extends Component {

    constructor(props) {
        super(props)
    }
   

    handleClick() {
        this.getResult();
    }
    getResult(){

        const { get } = require('axios')
        const apiOptions = {
            headers: {
                "x-rapidapi-host": "faroo-faroo-web-search.p.rapidapi.com",
                "x-rapidapi-key": "1f778b39fcmshedfb4cd05ee9dd6p18bce6jsnd389bbc7715b"
            }
        };
        const BASE_URL = `https://faroo-faroo-web-search.p.rapidapi.com/api?q=` + this.props.queries.query;
        get(BASE_URL, apiOptions)
            .then(response => response.data)
            .then(res => {
                this.props.queryResults(res)

            })
            .catch(err => {
                console.log('kujua ERROR:', err);

            })

    }
    componentDidMount(){
        this.getResult();

    }
    render() {
      const  handleChange=({ target }) =>{
          this.props.searchKey(target.value)
        }

        return (

            <div className="top-search-box grid">
                <div className="search-box">
                    <p className="side-title">Kujua</p>
                    <Input
                        type="text"
                        id="search-input"
                        placeholder="I'm searching for ..."
                        value={this.props.queries.query}

                        handleChange={handleChange}

                    />
                    <Input
                        value="Search"
                        type="button"
                        id="search-btn"
                        handleClick={()=>this.handleClick()}
                    />
                </div>
                { this.props.queries.results ? ( 
                <div className="result-area">
                    
                        <div>
                                             <div className="results-container span-row">
                                <p className="n-results-fetched">Kujua fetched about {this.props.queries.results.results.length} results</p>
                    {
                        
                                    this.props.queries.results.results.map((data, index)=>
                                        <SingleResult key={index} resultTitle={data.title} resultURL={data.url} resultSubLink={data.url} resultParagraph={data.kwic} />  
                                    )
                    }
                                
                </div>

                        </div>

                   
               
                <div className="pic-info-area">
                    <div className="result-pic">
                                <img className="picture" src={this.props.queries.results.results[0].iurl}/>
                    </div>
                            <div className="result-short-info">{this.props.queries.results.results[0].kwic}</div>
                </div>
                </div> 
                ) 
                
               : <Spinner/>
          
               
                }    
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return state
};
export default connect(mapStateToProps, { searchKey, queryResults}) (Results);