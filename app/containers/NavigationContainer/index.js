/**
 *
 * NavigationContainer
 *
 */

import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectNavigationContainer, {
  makeSelectIsDrawerOpen,
  makeSelectSelectedTag,
  makeSelectTags
} from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import { getTags, selectTag, toggleDrawer} from './actions';
import Navigation from "../../components/Navigation";

export function NavigationContainer({...props }) {
  useInjectReducer({ key: "navigationContainer", reducer });
  useInjectSaga({ key: "navigationContainer", saga });

  useEffect( () => {
    if (props.tags.length === 0) {
      props.getTags();
    }
  }, []);

  return <Navigation {...props} />;
}

// NavigationContainer.propTypes = {
//   tags: PropTypes.array.isRequired,
//   getTags: PropTypes.func.isRequired,
//   getArticlesByTag: PropTypes.func.isRequired,
//   selectTag: PropTypes.func.isRequired,
//   toggleDrawer: PropTypes.func.isRequired,
//   selectedTag: PropTypes.object,
//   isDrawerOpen: PropTypes.bool.isRequired,
// };

const mapStateToProps = createStructuredSelector({
  navigationContainer: makeSelectNavigationContainer(),
  tags: makeSelectTags(),
  selectedTag: makeSelectSelectedTag(),
  isDrawerOpen: makeSelectIsDrawerOpen(),
});

function mapDispatchToProps(dispatch) {
  return {
    getTags: () => dispatch(getTags()),
    selectTag: selectedTag => dispatch(selectTag(selectedTag)),
    toggleDrawer: () => dispatch(toggleDrawer()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(NavigationContainer);
