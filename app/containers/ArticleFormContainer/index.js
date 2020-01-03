/**
 *
 * ArticleFormContainer
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectArticleFormContainer from "./selectors";
import {makeSelectLoggedUser} from "../LoginContainer/selectors";
import {makeSelectSelectedTag} from "../NavigationContainer/selectors";
import reducer from "./reducer";
import saga from "./saga";
import {addArticle, addArticleCanceled} from "./actions";
import LinkForm from "../../components/LinkForm";

export function ArticleFormContainer({...props}) {
  useInjectReducer({ key: "articleFormContainer", reducer });
  useInjectSaga({ key: "articleFormContainer", saga });
  console.log(props);
  return <LinkForm {...props} />;
}

const mapStateToProps = createStructuredSelector({
  articleFormContainer: makeSelectArticleFormContainer(),
  loggedUser: makeSelectLoggedUser(),
  selectedTag: makeSelectSelectedTag(),
});

function mapDispatchToProps(dispatch) {
  return {
    addArticle: (article, tagId, userId) => dispatch(addArticle(tagId, userId, article)),
    addArticleCanceled: () => dispatch(addArticleCanceled()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(ArticleFormContainer);
