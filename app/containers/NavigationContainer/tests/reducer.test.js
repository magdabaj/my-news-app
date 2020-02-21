import produce from 'immer';
import navigationContainerReducer from "../reducer";
import {getTagsSuccess, selectTag, toggleDrawer} from "../actions";

/* eslint-disable default-case, no-param-reassign */
describe("navigationContainerReducer", () => {
  let state;
  beforeEach(() => {
    state = {
      tags: [],
      selectedTag: {},
      isDrawerOpen: false,
      routerLocation: '',
    };
  });

  it("returns the initial state", () => {
    const expectedResult = state;
    expect(navigationContainerReducer(undefined, {})).toEqual(expectedResult);
  });

  describe('getting tags', () => {
    it('gets tags successfully', () => {
      const _tags = [
        {
          id: 1,
          name: 'saga',
        },
        {
          id: 2,
          name: 'redux',
        }
      ]
      const expectedResult = produce(state, draft => {
        draft.tags = _tags
      })

      expect(
          navigationContainerReducer(state, getTagsSuccess(_tags))
      ).toEqual(expectedResult)
    })

    it('selects a tag', () => {
        const _selectedTag = {
        id: 1,
        name: 'saga',
      };
      const expectedResult = produce(state, draft => {
        draft.selectedTag = _selectedTag
      });

      expect(
          navigationContainerReducer(state, selectTag(_selectedTag))
      ).toEqual(expectedResult)
    });

    it('toggles the drawer', () => {
      const expectedResult = produce(state, draft => {
        draft.isDrawerOpen = !state.isDrawerOpen
      });

      expect(
          navigationContainerReducer(state, toggleDrawer())
      ).toEqual(expectedResult)
    })
  });

  /**
   * Example state change comparison
   *
   * it('should handle the someAction action correctly', () => {
   *   const expectedResult = produce(state, draft => {
   *     draft.loading = true;
   *     draft.error = false;
   *     draft.userData.nested = false;
   *   });
   *
   *   expect(appReducer(state, someAction())).toEqual(expectedResult);
   * });
   */
});
