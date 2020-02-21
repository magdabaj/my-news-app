// import produce from 'immer';
import articlesListContainerReducer from "../reducer";
import {produce} from "immer";
import {getArticlesForTagSuccess} from "../actions";
// import { someAction } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe("articlesListContainerReducer", () => {
  let state;
  beforeEach(() => {
    state = {
      tag: '',
      articlesForTag: [],
    };
  });

  it("returns the initial state", () => {
    const expectedResult = state;
    expect(articlesListContainerReducer(undefined, {})).toEqual(expectedResult);
  });

  describe('get articles for tag success action', () => {
    it('handles the getArticlesForTagSuccess correctly', () => {
      const articles = [
        {
          id: 1,
          url: 's',
          title: 's',
        },
        {
          id: 2,
          url: 'd',
          title: 'd',
        },
      ];

      const expectedResult = produce(state, draft => {
        draft.articlesForTag = articles
      })

      expect(articlesListContainerReducer(state, getArticlesForTagSuccess(articles))).toEqual(expectedResult)
    })
  })

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
