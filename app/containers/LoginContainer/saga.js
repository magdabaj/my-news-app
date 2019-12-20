import { all, take, call, put, select, takeLatest } from 'redux-saga/effects';
import {cancelLogin, login} from "./actions";
import {goBack} from "react-router-redux";
import {CANCEL_LOGIN, LOGIN} from "./constants";

export function* handleDone() {
    yield put(goBack());
}

export function* doLoginSaga() {
    yield takeLatest(LOGIN, handleDone);
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
