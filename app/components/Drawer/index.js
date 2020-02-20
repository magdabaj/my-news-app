/**
 *
 * Drawer
 *
 */

import React from "react";
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './styles.css';

const Drawer = ({ tags, isDrawerOpen, selectTag }) => {
  const drawerClass = !isDrawerOpen ? 'drawer' : 'drawer drawerOpen';

  return (
      tags !== undefined ?
          <div className={drawerClass}>
            {tags.map(tag => (
                <div
                    className={'item'}
                    key={tag.id}
                   // key={tag.tag_id}
                    onClick={()=>selectTag(tag)}
                >
                  {tag.name}
                </div>
            ))}
          </div> : null

      )

};

Drawer.propTypes = {
  tags: PropTypes.array,
  isDrawerOpen: PropTypes.bool,
  selectTag: PropTypes.func,
};

export default Drawer;
