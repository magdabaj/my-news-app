import { all, take, call, put, select, takeLatest } from 'redux-saga/effects';
import {cancelLogin, login, loginFailed, loginSuccess} from "./actions";
import {loginUser} from "../../utils/api/usersApi";
import {goBack} from "react-router-redux";
import {CANCEL_LOGIN, LOGIN} from "./constants";

export function* handleDone() {
    yield put(goBack());
}

export function* handleUserLogin(action) {
    const {email, password} = action;
    try{
        const user = yield call(loginUser,email, password);
        yield put(loginSuccess(user));
        yield put(goBack());
    } catch (e) {
        yield put(loginFailed(e.message))
    }
}

export function* doLoginSaga() {
    yield takeLatest(LOGIN, handleUserLogin);
}

export function* cancelSaga() {
    yield takeLatest(CANCEL_LOGIN, handleDone);
}

// Individual exports for testing
export default function* loginContainerSaga() {
  yield all([
      doLoginSaga(),
      cancelSaga(),
  ])
}
