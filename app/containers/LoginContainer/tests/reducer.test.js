// import produce from 'immer';
import loginContainerReducer from "../reducer";
import produce from "immer";
import {login} from "../actions";
// import { someAction } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe("loginContainerReducer", () => {
  let state;
  beforeEach(() => {
    state = {
      loggedUser: {},
      loginUser: {
        email: '',
        password: '',
      },
    };
  });

  it("returns the initial state", () => {
    const expectedResult = state;
    expect(loginContainerReducer(undefined, {
      loggedUser: {},
      loginUser: {
        email: '',
        password: '',
      },
    })).toEqual(expectedResult);
  });

  describe('login user actions', () => {
    it('handles the login action correctly', () => {
      const _loginUser = {
        email: 'email',
        password: 'password'
      };
      const expectedResult = produce(state, draft => {
        draft.loginUser.email = _loginUser.email;
        draft.loginUser.password = _loginUser.password
      })

      expect(loginContainerReducer(state, login(_loginUser.email, _loginUser.password))).toEqual(expectedResult)
    })
    it('logs user successfully', () => {
      const _loggedUser = {
        email: 'email',
        password: 'password',
        token: '21939393'
      }

      const expectedResult = produce(state, draft => {
        draft.loggedUser = _loggedUser
      })
    })
  })

  /**
   * Example state change comparison
   *
   * it('should handle the someAction action correctly', () => {
   *   const expectedResult = produce(state, draft => {
   *     draft.loading = true;
   *     draft.error = false;
   *     draft.userData.nested = false;
   *   });
   *
   *   expect(appReducer(state, someAction())).toEqual(expectedResult);
   * });
   */
});
