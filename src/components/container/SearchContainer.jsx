import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";
class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    render() {
        const { seo_title } = this.state;
        return (
            <div className="search-box-container">
                <div className="search-box">

                <Input
                    type="text"
                    id="search-input"
                    placeholder="I'm searching for ..."
                    handleChange={this.handleChange}
                />
                <Input
                    value="Search"
                    type="button"
                    id="search-btn"
                    handleChange={this.handleChange}
                />
                </div>
            </div>
        );
    }
}
const wrapper = document.getElementById("create-user-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
export default FormContainer;