/**
 *
 * Tests for LinkForm
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from "react";
import { render } from "react-testing-library";
// import 'jest-dom/extend-expect'; // add some helpful assertions

import LinkForm from "../index";
import {addArticle, addArticleCanceled} from "../../../containers/ArticleFormContainer/actions";

describe("<LinkForm />", () => {
  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    const _loggedUser = {};
    const _selectedTag = {
      id: 1,
      name: 'saga'
    };
    render(<LinkForm loggedUser={_loggedUser} addArticle={addArticle} addArticleCanceled={addArticleCanceled} selectedTag={_selectedTag}/>);
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
    const loggedUser = {
      email: 'email',
      password: 'password',
      token: 1234,
    };
    const selectedTag = {
      id: 1,
      name: 'saga'
    };
    const {
      container: { firstChild }
    } = render(<LinkForm LinkForm loggedUser={loggedUser} addArticle={addArticle} addArticleCanceled={addArticleCanceled} selectedTag={selectedTag}/>);
    expect(firstChild).toMatchSnapshot();
  });
});
