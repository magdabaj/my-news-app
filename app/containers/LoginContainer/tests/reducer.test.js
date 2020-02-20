// import produce from 'immer';
import loginContainerReducer from "../reducer";
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
