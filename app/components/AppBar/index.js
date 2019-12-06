/**
 *
 * AppBar
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import IconButton from "../IconButton";
import AppBarContainer from "./AppBar";

function AppBar() {
  return <AppBarContainer>
    <IconButton
      icon={"bars"}
    />
  </AppBarContainer>;
}

AppBar.propTypes = {};

export default AppBar;
