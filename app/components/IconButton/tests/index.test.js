/**
 *
 * Tests for IconButton
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from "react";
import { render } from "react-testing-library";
import 'jest-dom/extend-expect'; // add some helpful assertions

import IconButton from "../index";
import {toggleDrawer} from "../../../containers/NavigationContainer/actions";

jest.mock("../../../containers/NavigationContainer/actions");

describe("<IconButton />", () => {

  const icon = "bars";
  const buttonCLass = "iconButton";
  const iconClass = 'icon';

  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    render(<IconButton onClick={toggleDrawer} icon={icon} buttonClass={buttonCLass} iconClass={iconClass}/>);
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
    } = render(<IconButton onClick={toggleDrawer} icon={icon} buttonClass={buttonCLass} iconClass={iconClass}/>);
    expect(firstChild).toMatchSnapshot();
  });
});
