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
import reducer from "./reducer";
import saga from "./saga";

export function ArticleFormContainer() {
  useInjectReducer({ key: "articleFormContainer", reducer });
  useInjectSaga({ key: "articleFormContainer", saga });

  return <div />;
}

ArticleFormContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  articleFormContainer: makeSelectArticleFormContainer()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(ArticleFormContainer);
