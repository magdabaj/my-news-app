/*
 *
 * ArticleFormContainer reducer
 *
 */
import produce from "immer";
import { ADD_ARTICLE_SUCCESS } from "./constants";

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const articleFormContainerReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case ADD_ARTICLE_SUCCESS:
        break;
    }
  });

export default articleFormContainerReducer;
