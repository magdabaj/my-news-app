/*
 *
 * LoginContainer actions
 *
 */

import {CANCEL_LOGIN, LOGIN, LOGIN_FAILED, LOGIN_SUCCESS} from "./constants";

export const login = (email, password) => ({
  type: LOGIN,
  email,
  password,
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  user,
});

export const loginFailed = error => ({
  type: LOGIN_FAILED,
  error,
});

export const cancelLogin = () => ({
  type: CANCEL_LOGIN,
});