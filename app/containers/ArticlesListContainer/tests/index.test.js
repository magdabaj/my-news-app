/**
 *
 * Tests for ArticlesListContainer
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from "react";
import { render } from "react-testing-library";
// import 'jest-dom/extend-expect'; // add some helpful assertions

import { ArticlesListContainer } from "../index";
import {withStoreIntlAndRouter} from "../../../utils/testHelpers";
import makeSelectArticlesListContainer, {makeSelectArticles, selectTag} from "../selectors";
import {getAllArticles, getArticlesForTag, startAdd} from "../actions";

describe("<ArticlesListContainer />", () => {
  function renderArticlesListContainer(args) {
    const defaultProps = {
      selectedTag: {},
      articlesForTag: [],
      getArticlesForTag: () => {},
      getAllArticles: () => {},
      startAdd: () => {},
    }

    const props = {...defaultProps, ...args};

    return render(withStoreIntlAndRouter(<ArticlesListContainer {...props}/>))
  }
  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    const dispatch = jest.fn();
    renderArticlesListContainer();
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
    } = renderArticlesListContainer();
    expect(firstChild).toMatchSnapshot();
  });
});
