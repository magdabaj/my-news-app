import { take, call, put, select, all, takeLatest } from 'redux-saga/effects';
import {ADD_ARTICLE, ADD_ARTICLE_CANCELED} from "./constants";
import {addArticle} from "../../utils/api/articlesApi";
import {addArticleError, addArticleSuccess} from "./actions";
import {goBack} from "react-router-redux";

export function* addArticleSaga(action) {
    const {article, tagId, user} = action;
    try {
        const createdArticle = yield call(addArticle, article, tagId, user);
        yield put(addArticleSuccess(article));
    } catch (e) {
        yield put(addArticleError(e.message))
    }
}

export function* watchArticleAdd() {
    yield takeLatest(ADD_ARTICLE, addArticleSaga);
}

export function* watchAddCanceled() {
    yield takeLatest(ADD_ARTICLE_CANCELED, () => put(goBack()));
}

// Individual exports for testing
export default function* rootSaga() {
  yield all([
      watchArticleAdd(),
          watchAddCanceled()
      ])
}
