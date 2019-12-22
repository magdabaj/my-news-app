/*
 *
 * LoginContainer reducer
 *
 */
import produce from "immer";
import {DEFAULT_ACTION, LOGIN, LOGIN_SUCCESS} from "./constants";

export const initialState = {
    loginUser: {
        email: '',
        password: '',
    },
    loggedUser: {},
};

/* eslint-disable default-case, no-param-reassign */
const loginContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN:
          draft.loginUser.email = action.email;
          draft.loginUser.password = action.password;
          break;
      case LOGIN_SUCCESS:
          draft.loggedUser = action.user;
          break;
    }
  });

export default loginContainerReducer;
