/*
 *
 * ArticleFormContainer actions
 *
 */

import {ADD_ARTICLE, ADD_ARTICLE_CANCELED, ADD_ARTICLE_ERROR, ADD_ARTICLE_SUCCESS} from "./constants";

export const addArticle = (article, tagId, user) => ({
  type: ADD_ARTICLE,
  article,
  tagId,
  user
});

export const addArticleSuccess = article => ({
  type: ADD_ARTICLE_SUCCESS,
  article,
});

export const addArticleError = error => ({
  type: ADD_ARTICLE_ERROR,
  error,
});

export const addArticleCanceled = () => ({
  type: ADD_ARTICLE_CANCELED,
});