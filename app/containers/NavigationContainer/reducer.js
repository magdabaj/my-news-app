/*
 *
 * NavigationContainer reducer
 *
 */
import produce from "immer";
import {DEFAULT_ACTION, GET_TAGS_SUCCESS} from "./constants";

export const initialState = {
    tags: [],
};

/* eslint-disable default-case, no-param-reassign */
const navigationContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_TAGS_SUCCESS:
          draft.tags = action.tags;
        break;
    }
  });

export default navigationContainerReducer;
