/**
 *
 * Tests for LoginContainer
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from "react";
import { render } from "react-testing-library";
// import 'jest-dom/extend-expect'; // add some helpful assertions

import { LoginContainer, mapDispatchToProps } from "../index";
import {cancelLogin, login} from "../actions";
import {withStoreIntlAndRouter} from "../../../utils/testHelpers";

function renderLoginContainer(args) {
  const defaultProps = {
    login: () => {},
    cancelLogin: () => {},
    loginUser: {},
    loggedUser: {},
  }

  const props = {...defaultProps, ...args}

  return render(withStoreIntlAndRouter(<LoginContainer {...props}/>))
}

describe("<LoginContainer />", () => {
  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    renderLoginContainer();
    expect(spy).not.toHaveBeenCalled();
  });

  it("Expect to have additional unit tests specified", () => {
    expect(true).toEqual(true);
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip("Should render and match the snapshot", () => {
    const {
      container: { firstChild }
    } = renderLoginContainer();
    expect(firstChild).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('login', () => {
      it('should be injected', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        expect(result.login).toBeDefined()
      })
      it('should dispatch login when called', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        const user = {
          email: 'em',
          password: 'pas'
        }
        result.login(user.email, user.password)
        expect(dispatch).toHaveBeenCalledWith(login(user.email, user.password))
      })
    })
    describe('cancelLogin', () => {
      it('should be injected', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        expect(result.cancelLogin).toBeDefined()
      })
      it('should dispatch cancelLogin when called', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        result.cancelLogin()
        expect(dispatch).toHaveBeenCalledWith(cancelLogin())
      })
    })
  })
});
