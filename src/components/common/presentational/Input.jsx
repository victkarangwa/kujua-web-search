import React from "react";
import PropTypes from "prop-types";
const Input = ({ label, text, type, id, value, handleChange, placeholder }) => (
    <div className="form-group">
        <label htmlFor={label}>{text}</label>
        <input
            type={type}
            className={id}
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            required
        />
    </div>
);
Input.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};
export default Input;