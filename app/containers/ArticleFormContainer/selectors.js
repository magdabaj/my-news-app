import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the articleFormContainer state domain
 */

const selectArticleFormContainerDomain = state =>
  state.articleFormContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ArticleFormContainer
 */

const makeSelectArticleFormContainer = () =>
  createSelector(
    selectArticleFormContainerDomain,
    substate => substate
  );

export default makeSelectArticleFormContainer;
export { selectArticleFormContainerDomain };
