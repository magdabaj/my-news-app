/**
 *
 * Tests for LinkList
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from "react";
import { render } from "react-testing-library";
// import 'jest-dom/extend-expect'; // add some helpful assertions

import LinkList from "../index";
import {startAdd} from "../../../containers/ArticlesListContainer/actions";

describe("<LinkList />", () => {
  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    const articles = [];
    render(<LinkList articlesForTag={articles} startAdd={startAdd} selectedTag={'saga'}/>);
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
    const articles = [];
    const {
      container: { firstChild }
    } = render(<LinkList articlesForTag={articles} startAdd={startAdd} selectedTag={'saga'} />);
    expect(firstChild).toMatchSnapshot();
  });
});
