/**
 *
 * Tests for Drawer
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from "react";
import { render, fireEvent } from "react-testing-library";
import 'jest-dom/extend-expect'; // add some helpful assertions
import 'react-testing-library/cleanup-after-each'

import Drawer from "../index";
import {selectTag} from "../../../containers/NavigationContainer/actions";

const tags = [
  {
    name: 'saga',
    id: 1
  },
  {
    name: 'redux',
    id: 2
  }
];

jest.mock("../../../containers/NavigationContainer/actions")

describe("<Drawer />", () => {
  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    render(<Drawer />);
    expect(spy).not.toHaveBeenCalled();
  });

  it("Expect to show all tags", () => {
    const {getByRole} = render(<Drawer tags={tags} isDrawerOpen={true} selectTag={selectTag}/>);
    expect(getByRole(/drawerClass/i)).toBeInTheDocument()
  });

  it("Expect to fire selectedTag action", () => {
    const {getByText} = render(<Drawer tags={tags} isDrawerOpen={true} selectTag={selectTag}/>);
    expect(getByText(/redux/i)).toBeInTheDocument();
    expect(getByText(/saga/i)).toBeInTheDocument();
    fireEvent.click(getByText(/redux/i));
    expect(selectTag).toBeCalledWith({
      id: 2,
      name: 'redux'
    });
  })

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it("Should render and match the snapshot", () => {
    const {
      container: { firstChild }
    } = render(<Drawer />);
    expect(firstChild).toMatchSnapshot();
  });
});
