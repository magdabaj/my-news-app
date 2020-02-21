/**
 *
 * Tests for NavigationContainer
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from "react";
import { render } from "react-testing-library";
// import 'jest-dom/extend-expect'; // add some helpful assertions

import { NavigationContainer, mapDispatchToProps } from "../index";
import {getTags, selectTag, toggleDrawer} from "../actions";
import {makeSelectIsDrawerOpen, makeSelectSelectedTag, makeSelectTags} from "../selectors";
import {makeSelectEmail} from "../../LoginContainer/selectors";
import {withStoreIntlAndRouter} from "../../../utils/testHelpers";

function renderNavigationContainer(args) {
  const defaultProps = {
    getTags: () => {},
    selectTag: () => {},
    toggleDrawer: () => {},
    tags: [],
    selectedTag: {},
    isDrawerOpen: false,
    email: '',
  };

  const props = {...defaultProps, ...args}

  return render(withStoreIntlAndRouter(<NavigationContainer {...props}/>))
}

describe("<NavigationContainer />", () => {
  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    const dispatch = jest.fn();
    renderNavigationContainer();
    expect(spy).not.toHaveBeenCalled();
  });

  it("make a request for tags if their length equals 0", () => {
    const requestTagsMock = jest.fn()
    renderNavigationContainer({getTags: requestTagsMock})
    expect(requestTagsMock).toHaveBeenCalled();
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it("Should render and match the snapshot", () => {
    const {
      container: { firstChild }
    } = renderNavigationContainer();
    expect(firstChild).toMatchSnapshot();
  });

  describe('mapDispatchToProps', () => {
    describe('getTags', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.getTags).toBeDefined();
      })
      it('should dispatch getTags when called', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        result.getTags()
        expect(dispatch).toHaveBeenCalledWith(getTags())
      })
    })
    describe('selectTag', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.selectTag).toBeDefined();
      })
      it('should dispatch selectTag when called', () => {
        const selectedTag = {
          id: 1,
          name: 'saga'
        }
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        result.selectTag(selectedTag)
        expect(dispatch).toHaveBeenCalledWith(selectTag(selectedTag))
      })
    })
    describe('toggleDrawer', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.toggleDrawer).toBeDefined();
      })
      it('should dispatch toggleDrawer when called', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        result.toggleDrawer()
        expect(dispatch).toHaveBeenCalledWith(toggleDrawer())
      })
    })
  })
});
