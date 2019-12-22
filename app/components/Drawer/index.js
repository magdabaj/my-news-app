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

  return <div className={drawerClass}>
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
  </div>;
};

Drawer.propTypes = {
  tags: PropTypes.array.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  selectTag: PropTypes.func.isRequired,
};

export default Drawer;
