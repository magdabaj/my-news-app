import { getArticlesForTagFailed } from "../actions";
import { GET_ALL_ARTICLES, START_ADD, GET_ARTICLES_FOR_TAG, GET_ARTICLES_FOR_TAG_FAILED, GET_ARTICLES_FOR_TAG_SUCCESS } from "../constants";

describe("ArticlesListContainer actions", () => {
  describe("Default Action", () => {
    it("has a type of GET_ARTICLES_FOR_TAG_FAILED", () => {
      const expected = {
        type: GET_ARTICLES_FOR_TAG_FAILED,
        'error': 'error',
      };
      expect(getArticlesForTagFailed('error')).toEqual(expected);
    });
  });
});
