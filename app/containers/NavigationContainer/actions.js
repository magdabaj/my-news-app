/*
 *
 * NavigationContainer actions
 *
 */

import { GET_TAGS, GET_ARTICLES_BY_TAG, GET_TAGS_FAILED, GET_TAGS_SUCCESS } from "./constants";

export const getTags = () => ({
  type: GET_TAGS
});

export const getTagsSuccess = tags => ({
  type: GET_TAGS_SUCCESS,
  tags
});

export const getTagsFailed = error => ({
  type: GET_TAGS_FAILED,
  error
});

export const getArticlesByTag = tagId => ({
  type: GET_ARTICLES_BY_TAG,
  tagId,
});
