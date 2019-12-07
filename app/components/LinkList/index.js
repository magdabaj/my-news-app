/**
 *
 * LinkList
 *
 */

import React from "react";
import IconButton from "../IconButton";
import Link from '../Link';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const LinkList = ({articlesForTag, ...props}) => {
  return (
      <div>
        {articlesForTag.length > 0 ?
            articlesForTag.map(article => (
                <Link
                    key={article.article_id}
                    article={article}
                />
        )) :
        <h1>There are no articles in this category yet</h1>}

        {/*<IconButton*/}
        {/*    icon={"plus"}*/}
        {/*/>*/}
      </div>
  )
}

LinkList.propTypes = {};

export default LinkList;
