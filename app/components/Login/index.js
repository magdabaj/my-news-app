/**
 *
 * Login
 *
 */

import React,{useState} from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import TextInput from "../TextInput";
import Form from "./Form";
import Heading from "./Heading";
import ButtonsContainer from "./ButtonsContainer";
import Button from "./Button";

const Login = ({email, password, onChange, cancelLogin, login, ...props}) => {
  console.log("props login ", props);
  const [loginUser, setLoginUser] = useState({...props.loginUser});
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  function handleChange(event) {
    const {name, value} = event.target;

    setLoginUser(prevUser => ({
      ...prevUser,
      [name]: value
    }))
  }
  console.log("loginUser", loginUser);

  function formIsValid() {
    const {email, password} = loginUser;
    const errors = {};

    if(!email) errors.email = "Email is required";
    if(!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }


  function handleSave(event) {
    event.preventDefault();
    if(!formIsValid()) return;
    setSaving(true);
    try{
      login(loginUser.email, loginUser.password);
    } catch (e) {
      setSaving(false);
      setErrors({handleSave: e.message})
    }
  }

  return <div>
    <Form onSubmit={handleSave}>
      <Heading>
        Login with your email
      </Heading>
      {errors.handleSave && (
          <div className={"alert-danger"} role={"alert"}>
            {errors.handleSave}
          </div>
      )}
    <TextInput
        name={"email"}
        label={"Email"}
        value={email}
        onChange={handleChange}
        error={errors.email}
    />
    <TextInput
        name={"password"}
        label={"Password"}
        value={password}
        onChange={handleChange}
        error={errors.password}
    />
      <ButtonsContainer>
        <Button onClick={cancelLogin}>cancel</Button>
        <Button type="submit" disabled={saving} onSubmit={handleSave}>
          {saving ? "logging..." : "login"}
        </Button>
      </ButtonsContainer>
    </Form>
  </div>;
};

Login.propTypes = {};

export default Login;
