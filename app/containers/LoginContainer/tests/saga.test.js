/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
// import { take, call, put, select } from 'redux-saga/effects';
// import loginContainerSaga from '../saga';

// const generator = loginContainerSaga();

import {doLoginSaga, handleUserLogin} from "../saga";
import {LOGIN} from "../constants";
import {put, takeLatest} from "redux-saga/effects";
import {loginFailed, loginSuccess} from "../actions";
import {goBack} from "react-router-redux";

const action = {
  type: LOGIN,
    email: 'email',
    password: 'password'
}

describe("loginContainerSaga Saga", () => {
  let loginUserGenerator;

  beforeEach(() => {
    loginUserGenerator = handleUserLogin({action})

    const callDescriptor = loginUserGenerator.next(action.email, action.password).value
    expect(callDescriptor).toMatchSnapshot()
  });
  it("should dispatch loginSuccess if it gets the data successfully", () => {
    const response = {
      email: 'email',
      password: 'password',
      token: 'token'
    }
    const loginUserSuccess = loginUserGenerator.next(response).value
    expect(loginUserSuccess).toEqual(put(loginSuccess(response)))
  });
  // it('should inject goBack action', () => {
  //   const goBackMocked = jest.fn()
  //   const goBackSuccess = loginUserGenerator.next(goBackMocked()).value
  //   expect(goBackSuccess).toEqual(put(goBackMocked()))
  // })
  it('should call the loginFailed action if logging fails', () => {
    const response = new Error('Some error')
    const loginUserFailed = loginUserGenerator.throw(response).value
    expect(loginUserFailed).toEqual(put(loginFailed(response.message)))
  })
});

describe('do login saga', () => {
  const watchLoginSaga = doLoginSaga();

  it('should start task to watch for LOGIN action', () => {
    const takeLatestDescriptor = watchLoginSaga.next().value
    expect(takeLatestDescriptor).toEqual(takeLatest(LOGIN, handleUserLogin))
  })
})