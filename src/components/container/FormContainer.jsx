import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";
class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            seo_title: ""
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
                    text="Display Name"
                    label="display_name"
                    type="text"
                    id="display_name"
                    value={seo_title}
                    handleChange={this.handleChange}
                />
            </form>
        );
    }
}
const wrapper = document.getElementById("create-user-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
export default FormContainer;