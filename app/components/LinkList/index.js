/**
 *
 * LinkList
 *
 */

import React from "react";
import IconButton from "../IconButton";
import Link from '../Link';
import styles from './styles.css';
import './styles.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const LinkList = ({articlesForTag, startAdd, children, selectedTag}) => {
  return (
      <div>
          {selectedTag.name.length > 0 ?
              <div>
                  {articlesForTag.length > 0 ?
                    articlesForTag.map(article => (
                        <Link
                        key={article.article.id}
                        article={article.article}
                        />

                        )) :
            <h1>There are no articles in this category yet</h1>}


            <IconButton
              icon={"plus"}
              buttonClass={"button"}
              iconClass={styles.icon}
              onClick={()  => startAdd(selectedTag)}
            />

            {children}
              </div>
          : <div>Select a tag</div>
            }
      </div>
  )
};

LinkList.propTypes = {};

export default LinkList;
