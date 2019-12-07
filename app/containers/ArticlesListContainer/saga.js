import { take, call, put, select, takeLatest, all } from 'redux-saga/effects';
import {SELECT_TAG} from "../NavigationContainer/constants";
import { getArticlesByTag } from "../../utils/api/tagsApi";
import {fetchArticles} from "../../utils/api/articlesApi";
import {getArticlesForTagFailed, getArticlesForTagSuccess} from "./actions";
import {GET_ALL_ARTICLES, GET_ARTICLES_FOR_TAG} from "./constants";

export function* loadArticlesForTag(action) {
    console.log(action);
    try {
        const articles = yield call(getArticlesByTag, action.tagId);
        yield put(getArticlesForTagSuccess(articles));
    } catch (error){
        yield put(getArticlesForTagFailed(error.message));
    }
}

export function* watchArticlesForTagLoad() {
    yield takeLatest(GET_ARTICLES_FOR_TAG, loadArticlesForTag);
}

export function* loadAllArticles() {
    try {
        const articles = yield call(fetchArticles);
        yield put(getArticlesForTagSuccess(articles));
    } catch (error){
        yield put(getArticlesForTagFailed(error.message));
    }
}

export function* watchAllArticlesLoad() {
    yield takeLatest(GET_ALL_ARTICLES, loadAllArticles)
}

// Individual exports for testing
export default function* articlesListContainerSaga() {
  yield all([
      watchArticlesForTagLoad(),
      watchAllArticlesLoad(),
      ])
}
