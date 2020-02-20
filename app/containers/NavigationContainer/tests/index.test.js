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

import { NavigationContainer } from "../index";
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

  it("Expect to have additional unit tests specified", () => {
    expect(true).toEqual(true);
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
});
