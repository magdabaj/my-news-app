/*
 *
 * ArticlesListContainer actions
 *
 */

import {
  GET_ALL_ARTICLES,
  GET_ARTICLES_FOR_TAG,
  GET_ARTICLES_FOR_TAG_FAILED,
  GET_ARTICLES_FOR_TAG_SUCCESS, START_ADD
} from "./constants";

export const getAllArticles = () => ({
  type: GET_ALL_ARTICLES
});

export const getArticlesForTag = tagId => ({
  type: GET_ARTICLES_FOR_TAG,
  tagId,
});

export const getArticlesForTagSuccess = articles => ({
  type: GET_ARTICLES_FOR_TAG_SUCCESS,
  articles,
});

export const getArticlesForTagFailed = error => ({
  type: GET_ARTICLES_FOR_TAG_FAILED,
  error,
});

export const startAdd = tagName => ({
  type: START_ADD,
  tagName,
});