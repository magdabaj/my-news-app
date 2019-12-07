/**
 *
 * Navigation
 *
 */

import React from "react";
import AppBar from "../AppBar";
import Drawer from "../Drawer";
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Navigation({ toggleDrawer, isDrawerOpen, tags, selectTag, ...props}) {
  console.log('props', props);
  return <div>
    <AppBar
        toggleDrawer={toggleDrawer}
    />
    <Drawer
        tags={tags}
        isDrawerOpen={isDrawerOpen}
        selectTag={selectTag}
    />
  </div>;
}

Navigation.propTypes = {
  tags: PropTypes.array.isRequired,
  selectTag: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default Navigation;
