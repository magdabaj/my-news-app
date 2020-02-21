/**
 *
 * Tests for ArticleFormContainer
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from "react";
import { render } from "react-testing-library";
// import 'jest-dom/extend-expect'; // add some helpful assertions

import { ArticleFormContainer } from "../index";
import {addArticle, addArticleCanceled} from "../actions";
import {withStoreIntlAndRouter} from "../../../utils/testHelpers";

function renderArticleFormContainer(args) {
  const defaultprops = {
    addArticle: () => {},
    addArticleCanceled: () => {},
    loggedUser: {},
    selectedTag: {},
  };

  const props = {...defaultprops, ...args};

  return render(withStoreIntlAndRouter(<ArticleFormContainer {...props} />))
}

describe("<ArticleFormContainer />", () => {
  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    renderArticleFormContainer();
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
    } = renderArticleFormContainer();
    expect(firstChild).toMatchSnapshot();
  });
});
