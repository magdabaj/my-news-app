import { getTags, getTagsFailed, getTagsSuccess, selectTag, toggleDrawer } from "../actions";
import { GET_TAGS, GET_TAGS_FAILED, GET_TAGS_SUCCESS, SELECT_TAG, TOGGLE_DRAWER } from "../constants";

describe("NavigationContainer actions", () => {
  describe("Default Action", () => {
    it("has a type of GET_TAGS", () => {
      const expected = {
        type: GET_TAGS
      };
      expect(getTags()).toEqual(expected);
    });

    it("has a type of GET_TAGS_SUCCESS", () => {
      const tags = {
        'tag1':'tag1',
        'tag2': 'tag2'
      };
      const expected = {
        type: GET_TAGS_SUCCESS,
        tags
      };
      expect(getTagsSuccess(tags)).toEqual(expected);
    });

    it("has a type of GET_TAGS_FAILED", () => {
      const error = {
        message: 'error'
      }
      const expected = {
        type: GET_TAGS_FAILED,
        error,
      };
      expect(getTagsFailed(error)).toEqual(expected);
    });

    it("has a type of SELECT_TAG", () => {
      const selectedTag = {
        id: 1,
        name: 'saga',
      };
      const expected = {
        type: SELECT_TAG,
        selectedTag,
      };
      expect(selectTag(selectedTag)).toEqual(expected);
    });

    it("has a type of GET_ARTICLES_BY_TAG", () => {

      const expected = {
        type: TOGGLE_DRAWER,
      };
      expect(toggleDrawer()).toEqual(expected);
    });
  });
});
