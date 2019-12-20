/**
 *
 * Login
 *
 */

import React,{useState} from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import TextInput from "../TextInput";

const Login = ({email, password, onChange, cancelLogin, login, ...props}) => {
  console.log("props login ", props);
  const [loginUser, setLoginUser] = useState({...props.loginUser});

  function handleChange(event) {
    const {name, value} = event.target;

    setLoginUser(prevUser => ({
      ...prevUser,
      [name]: value
    }))
  }
  console.log("loginUser", loginUser);
  function handleSave(event) {
    event.preventDefault();
    login(loginUser.email, loginUser.password);
  }

  return <div>
    <form onSubmit={handleSave}>
    <TextInput
        name={"email"}
        label={"Email"}
        value={email}
        onChange={handleChange}
        error={/*props.error.name*/''}
    />
    <TextInput
        name={"password"}
        label={"Password"}
        value={password}
        onChange={handleChange}
        error={/*props.error.name*/''}
    />
    <button onClick={cancelLogin}>cancel</button>
    <button onSubmit={handleSave}>login</button>
    </form>
  </div>;
};

Login.propTypes = {};

export default Login;
