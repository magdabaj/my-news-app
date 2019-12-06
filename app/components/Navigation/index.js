/**
 *
 * Navigation
 *
 */

import React from "react";
import AppBar from "../AppBar";
import Drawer from "../Drawer";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Navigation({ ...props}) {
  console.log('props', props);
  return <div>
    <AppBar/>
    <Drawer
        tags={props.tags}
    />
    This is navigation component
  </div>;
}

Navigation.propTypes = {};

export default Navigation;
