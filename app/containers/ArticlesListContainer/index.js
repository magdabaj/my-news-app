/**
 *
 * ArticlesListContainer
 *
 */

import React, { useEffect }from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectArticlesListContainer, {makeSelectArticles, selectSlug, selectTag} from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import { getArticlesForTag, getAllArticles, startAdd } from "./actions";
import LinkList from "../../components/LinkList";

export const ArticlesListContainer = ({...props}) => {
  useInjectReducer({ key: "articlesListContainer", reducer });
  useInjectSaga({ key: "articlesListContainer", saga });


  useEffect(() => {

    if(props.selectedTag.id/*tag_id*/ !== null
        && props.selectedTag !== undefined)
    {
          props.getArticlesForTag(props.selectedTag.id/*tag_id*/);
    }
    else {
      // props.getAllArticles();
    }
    // props.getArticlesForTag(props.selectedTag.tag_id);
    console.log(props.articlesForTag);
    console.log(props.selectedTag);
  }, [props.selectedTag]);

  console.log(props);

  return <LinkList {...props} />;
};

ArticlesListContainer.propTypes = {
  getArticlesForTag: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  articlesListContainer: makeSelectArticlesListContainer(),
  selectedTag: selectTag(),
  articlesForTag: makeSelectArticles(),
});

function mapDispatchToProps(dispatch) {
  return {
    getArticlesForTag: tagId => dispatch(getArticlesForTag(tagId)),
    getAllArticles: () => dispatch(getAllArticles()),
    startAdd: tagName => dispatch(startAdd(tagName)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(ArticlesListContainer);
