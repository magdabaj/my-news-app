import {
  getAllArticles,
  getArticlesForTag,
  getArticlesForTagFailed,
  getArticlesForTagSuccess,
  startAdd
} from "../actions";
import { GET_ALL_ARTICLES, START_ADD, GET_ARTICLES_FOR_TAG, GET_ARTICLES_FOR_TAG_FAILED, GET_ARTICLES_FOR_TAG_SUCCESS } from "../constants";

describe("ArticlesListContainer actions", () => {
  describe("Default Action", () => {
    it("has a type of GET_ARTICLES_FOR_TAG_FAILED", () => {
      const expected = {
        type: GET_ARTICLES_FOR_TAG_FAILED,
        error: 'error',
      };
      expect(getArticlesForTagFailed('error')).toEqual(expected);
    });

    it("has a type of GET_ALL_ARTICLES", () => {
      const expected = {
        type: GET_ALL_ARTICLES,
      };
      expect(getAllArticles()).toEqual(expected);
    });

    it("has a type of GET_ARTICLES_FOR_TAG", () => {
      const expected = {
        type: GET_ARTICLES_FOR_TAG,
        tagId: 1
      };
      expect(getArticlesForTag(1)).toEqual(expected);
    });

    it("has a type of GET_ARTICLES_FOR_TAG_SUCCESS", () => {
      const articles = [
        {
          id: 1,
          url: 'ee',
          title: 'aaa'
        },
        {
          id: 2,
          url: 'a',
          title: 'b'
        }
      ]
      const expected = {
        type: GET_ARTICLES_FOR_TAG_SUCCESS,
        articles
      };
      expect(getArticlesForTagSuccess(articles)).toEqual(expected);
    });


    it("has a type of START_ADD", () => {
      const expected = {
        type: START_ADD,
        tagName: 'saga'
      };
      expect(startAdd('saga')).toEqual(expected);
    });
  });
});
