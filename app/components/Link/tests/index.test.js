/**
 *
 * Tests for Link
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from "react";
import { render } from "react-testing-library";
import 'jest-dom/extend-expect'; // add some helpful assertions

import Link from "../index";

describe("<Link />", () => {
  const article = {
    id: 1,
    url: "some url",
    title: "some title",
  };

  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    render(<Link />);
    expect(spy).not.toHaveBeenCalled();
  });

  it("Expect to have additional unit tests specified", () => {
    const {getByText} = render(<Link article={article}/>);
    expect(getByText(article.url)).toBeInTheDocument();
    expect(getByText(article.title)).toBeInTheDocument();
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip("Should render and match the snapshot", () => {
    const {
      container: { firstChild }
    } = render(<Link />);
    expect(firstChild).toMatchSnapshot();
  });
});
