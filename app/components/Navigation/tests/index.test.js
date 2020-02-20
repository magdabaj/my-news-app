/**
 *
 * Tests for Navigation
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from "react";
import { render } from "react-testing-library";
import {toggleDrawer} from "../../../containers/NavigationContainer/actions";
import { selectTag } from "../../../containers/NavigationContainer/actions";
// import 'jest-dom/extend-expect'; // add some helpful assertions

import Navigation from "../index";

describe("<Navigation />", () => {
  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    const tags = [
      {
        id: 2,
        name: 'saga'
      },
      {
        id:1,
        name: 'redux'
      },
    ];
    render(<Navigation toggleDrawer={toggleDrawer} isDrawerOpen={false} selectTag={selectTag} email={''} tags = {tags} />);
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
  it.skip("Should render and match the snapshot", () => {
    const {
      container: { firstChild }
    } = render(<Navigation />);
    expect(firstChild).toMatchSnapshot();
  });
});
