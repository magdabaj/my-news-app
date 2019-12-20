/*
 *
 * LoginContainer actions
 *
 */

import {CANCEL_LOGIN, LOGIN} from "./constants";

export const login = (email, password) => ({
  type: LOGIN,
  email,
  password,
});

export const cancelLogin = () => ({
  type: CANCEL_LOGIN,
});