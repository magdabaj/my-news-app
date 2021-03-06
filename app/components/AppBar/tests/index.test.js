/**
 *
 * Tests for AppBar
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from "react";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from "history";
import { render } from "react-testing-library";
import {toggleDrawer} from "../../../containers/NavigationContainer/actions";
// import 'jest-dom/extend-expect'; // add some helpful assertions

import AppBar from "../index";

jest.mock('../../../containers/NavigationContainer/actions');

describe("<AppBar />", () => {
  const history = createMemoryHistory({initialEntries: ['/']})
  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    render(
        <Router history={history}>
          <AppBar toggleDrawer={toggleDrawer}/>
        </Router>);
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
    } = render(<AppBar toggleDrawer={toggleDrawer}/>);
    expect(firstChild).toMatchSnapshot();
  });
});
