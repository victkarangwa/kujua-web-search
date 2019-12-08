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
            <form id="user-form">
                <Input
                    text="Email"
                    label="display_name"
                    type="email"
                    id="display_name"
                    handleChange={this.handleChange}
                />
                <Input
                    text="Password"
                    label="display_name"
                    type="password"
                    id="display_name"
                    handleChange={this.handleChange}
                />
                <Input
                    label="display_name"
                    type="submit"
                    value="sign in"
                    id="display_name"
                    handleChange={this.handleChange}
                />
            </form>
        );
    }
}
const wrapper = document.getElementById("create-user-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
export default FormContainer;