/*
 *
 * LoginContainer reducer
 *
 */
import produce from "immer";
import {DEFAULT_ACTION, LOGIN} from "./constants";

export const initialState = {
    loginUser: {
        email: '',
        password: '',
    },
};

/* eslint-disable default-case, no-param-reassign */
const loginContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN:
          draft.loginUser.email = action.email;
          draft.loginUser.password = action.password;
        break;
    }
  });

export default loginContainerReducer;
