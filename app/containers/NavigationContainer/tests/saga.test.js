/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { take, call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
// import navigationContainerSaga from '../saga';

// const generator = navigationContainerSaga();

import {getTags, pushTag, pushTagTest, watchTagsLoad, watchTagsPush} from "../saga";
import {getTagsFailed, getTagsSuccess} from "../actions";
import {GET_TAGS, SELECT_TAG} from "../constants";

describe("navigationContainerSaga Saga", () => {
  let getTagsGenerator;

  beforeEach(() => {
    getTagsGenerator = getTags();

    const callDescriptor = getTagsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot()
  });

  it("should dispatch getTagsSuccess if it gets the data successfully", () => {
    const response = {
      tags: [
        {
          id: 1,
          name: 'saga'
        },
        {
          id: 2,
          name: 'redux'
        }
      ]
    }
    const putReceivedTagsSuccess = getTagsGenerator.next(response).value;
    expect(putReceivedTagsSuccess).toEqual(
        put(getTagsSuccess(response))
    );
  });

  it('should call the getTagsFailed action if the response errors', () => {
    const response = new Error('Some error')
    const putReceivedTagsFailed = getTagsGenerator.throw(response).value
    expect(putReceivedTagsFailed).toEqual(
        put(getTagsFailed(response.message))
    )
  })
});

describe('loading tags saga', () => {
  const loadTagsSaga = watchTagsLoad();

  it('should start a task to watch for GET_TAGS action', () => {
    const takeLatestDescriptor = loadTagsSaga.next().value;
    expect(takeLatestDescriptor).toEqual(
        takeLatest(GET_TAGS, getTags)
    )
  })
})

describe('push tag saga', () => {
  let pushTagGenerator;

  const action = {
    type: SELECT_TAG,
    selectedTag: {
      id: 1,
      name: 'saga'
    }
  };
  beforeEach(() => {
    pushTagGenerator = pushTag(action);

    const callDescriptor = pushTagGenerator.next(action.selectedTag.name).value;
    expect(callDescriptor).toMatchSnapshot();
  });
})

describe('watch tag push', () => {
  const watchTagsPushSaga = watchTagsPush();

  it('should start task to watch SELECT_TAG action', () => {
    const takeLatestDescriptor = watchTagsPushSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(SELECT_TAG, pushTag))
  })
})
