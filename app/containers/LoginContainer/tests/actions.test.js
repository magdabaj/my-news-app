import { loginSuccess, login, cancelLogin, loginFailed } from "../actions";
import { LOGIN_SUCCESS, LOGIN, LOGIN_FAILED, CANCEL_LOGIN } from "../constants";

describe("LoginContainer actions", () => {
  describe("Default Action", () => {
    const email = 'email';
    const password = 'password';
    it("has a type of LOGIN", () => {
      const expected = {
        type: LOGIN,
        email,
        password
      };
      expect(login(email, password)).toEqual(expected);
    });

    it("has a type of LOGIN_SUCCESS", () => {
      const user = {
        userId: 1,
        email: 'email',
        password: 'password',
      };
      const expected = {
        type: LOGIN_SUCCESS,
        user
      };
      expect(loginSuccess(user)).toEqual(expected);
    });

    it("has a type of LOGIN_FAILED", () => {
      const error = {
        message: 'error'
      };
      const expected = {
        type: LOGIN_FAILED,
        error
      };
      expect(loginFailed(error)).toEqual(expected);
    });

    it("has a type of CANCEL_LOGIN", () => {
      const expected = {
        type: CANCEL_LOGIN,
      };
      expect(cancelLogin()).toEqual(expected);
    });
  });
});
