import { createSelector } from "reselect";
import { initialState } from "./reducer";
import makeSelectNavigationContainer, {selectNavigationContainerDomain} from "../NavigationContainer/selectors";

/**
 * Direct selector to the articlesListContainer state domain
 */

const selectArticlesListContainerDomain = state =>
  state.articlesListContainer || initialState;

const selectArticlesRoute = (state, props) =>
    props.match.params.tag;

const selectSlug = () =>
    createSelector(
        selectArticlesRoute,
        tag => tag,
    );

const selectTag = () =>
    createSelector(
        makeSelectNavigationContainer(),
        selectArticlesRoute,
        (navigationState, routeArticleName) => {
            const selectedTag = navigationState.tags.find(tag => tag.name === routeArticleName);

            return selectedTag || {
                name: '',
                id: null,
            }
        }
    );

/**
 * Other specific selectors
 */

/**
 * Default selector used by ArticlesListContainer
 */

const makeSelectArticlesListContainer = () =>
  createSelector(
    selectArticlesListContainerDomain,
    substate => substate,
  );

const makeSelectArticles = () =>
    createSelector(
        selectArticlesListContainerDomain,
        substate => substate.articlesForTag,
    );

export default makeSelectArticlesListContainer;
export { selectArticlesListContainerDomain, selectTag, makeSelectArticles, selectSlug };
