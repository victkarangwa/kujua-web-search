import React from "react";
import PropTypes from "prop-types";
const Input = ({ label, text, type, id, value, handleChange, handleClick, placeholder }) => { 
    return(
    <div className="form-group">
        <label htmlFor={label}>{text}</label>
        <input
            type={type}
            className={id}
            defaultValue={value}
            id={id}
            placeholder={placeholder}
            onChange={handleChange}
            onClick={handleClick}
            required
        />
    </div>
)};
// Input.propTypes = {
//     type: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     placeholder: PropTypes.string.isRequired,
// };
export default Input;