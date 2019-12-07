/*
 *
 * ArticlesListContainer reducer
 *
 */
import produce from "immer";
import {DEFAULT_ACTION, GET_ARTICLES_FOR_TAG_SUCCESS} from "./constants";

export const initialState = {
    tag: '',
    articlesForTag: [],
};

/* eslint-disable default-case, no-param-reassign */
const articlesListContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ARTICLES_FOR_TAG_SUCCESS:
          draft.articlesForTag = action.articles;
        break;
    }
  });

export default articlesListContainerReducer;
