/**
 *
 * LoginContainer
 *
 */

import React, {useState} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectLoginContainer, {makeSelectLoginUser} from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import Login from "../../components/Login";
import {login, cancelLogin} from "./actions";

export function LoginContainer({...props}) {
  useInjectReducer({ key: "loginContainer", reducer });
  useInjectSaga({ key: "loginContainer", saga });

  // console.log({...props});


  return <div>
    <Login {...props} />
  </div>;
}

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  loginContainer: makeSelectLoginContainer(),
  loginUser: makeSelectLoginUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => dispatch(login(email, password)),
    cancelLogin: () => dispatch(cancelLogin()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(LoginContainer);
