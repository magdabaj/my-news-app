import { take, call, put, select, takeLatest, all } from 'redux-saga/effects';
import { fetchTags } from '../../utils/api/tagsApi';
import {getTagsFailed, getTagsSuccess} from "./actions";
import {GET_TAGS} from "./constants";

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

export default function* rootSaga() {
    yield all([
        watchTagsLoad(),
    ])
}
