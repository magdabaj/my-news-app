import { take, call, put, select, takeLatest, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { fetchTags } from '../../utils/api/tagsApi';
import {getTagsFailed, getTagsSuccess} from "./actions";
import {GET_TAGS, GET_TAGS_SUCCESS, SELECT_TAG} from "./constants";
import makeSelectNavigationContainer, {selectNavigationContainerDomain} from "./selectors";
import {START_ADD} from "../ArticlesListContainer/constants";

// Individual exports for testing
export function* getTags() {
    try {
        const tags = yield call(fetchTags);
        yield put(getTagsSuccess(tags));
    }
    catch (error) {
        yield put(getTagsFailed(error.message));
    }
}

export function* watchTagsLoad() {
    yield takeLatest(GET_TAGS, getTags);
}

export function* setDefaultArticles(action) {
    const state = yield select(makeSelectNavigationContainer());
    console.log(state);
    if(Object.entries(state.selectedTag).length === 0 && state.routerLocation === '/'){
        // todo display all articles
        yield put(push('/topics'))
    }
}

export function* watchDefaultArticlesSetting() {
    yield takeLatest(GET_TAGS_SUCCESS, setDefaultArticles);
}

export function* pushTag(action){
    yield put(push(`/topics/${action.selectedTag.name}`))
}

export function* watchTagsPush() {
    yield takeLatest(SELECT_TAG, pushTag);
}

export function* startArticleAdd(action) {
    yield put(push(`/topics/${action.tagName.name}/add`));
}

export function* watchArticleAdd() {
    yield takeLatest(START_ADD, startArticleAdd);
}

export default function* rootSaga() {
    yield all([
        watchTagsLoad(),
        watchTagsPush(),
        watchDefaultArticlesSetting(),
        watchArticleAdd(),
    ])
}
