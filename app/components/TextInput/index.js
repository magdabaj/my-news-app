/**
 *
 * TextInput
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function TextInput({label, name, value, placeholder, onChange, error}) {
  return <div>
    <label htmlFor={name}>{label}</label>
    <div>
      <input
          type={'text'}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
      />
    </div>
    {error && <div>{error}</div>}
  </div>;
}

TextInput.propTypes = {};

export default TextInput;
