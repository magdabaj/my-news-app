/**
 *
 * Drawer
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Drawer = ({ tags }) => {
  return <div>
    {tags.map(tag => (
        <div key={tag.tag_id}>
          {tag.name}
        </div>
    ))}
  </div>;
}

Drawer.propTypes = {};

export default Drawer;
