/*
 *
 * NavigationContainer reducer
 *
 */
import produce from "immer";
import { GET_TAGS_SUCCESS, SELECT_TAG, TOGGLE_DRAWER} from "./constants";

export const initialState = {
    tags: [],
    selectedTag: {},
    isDrawerOpen: false,
    routerLocation: '',
};

/* eslint-disable default-case, no-param-reassign */
const navigationContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_TAGS_SUCCESS:
          draft.tags = action.tags;
          break;
      case SELECT_TAG:
        draft.selectedTag = action.selectedTag;
        draft.isDrawerOpen = false;
        break;
        case TOGGLE_DRAWER:
            draft.isDrawerOpen = !state.isDrawerOpen;
            break;
        case '@@router/LOCATION_CHANGE':
            console.log('router location change', action);
            draft.routerLocation = action.payload.location.pathname;
            break;
        // default:
        //     return state;
    }
  });

export default navigationContainerReducer;
