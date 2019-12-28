/**
 *
 * TextInput
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import "./styles.css";

function TextInput({label, name, value, placeholder, onChange, error}) {
  let wrapperClass = "input";
  if(error && error.length > 0) {
    wrapperClass += " " + "inputError";
  }
  return <div>
    <label htmlFor={name}>{label}</label>
    <div className={"field"}>
      <input
          type={'text'}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={wrapperClass}
      />
    </div>
    {error && <div className={"errorMessage"}>{error}</div>}
  </div>;
}

TextInput.propTypes = {};

export default TextInput;
