/**
 *
 * AppBar
 *
 */

import React from "react";
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import IconButton from "../IconButton";
import AppBarContainer from "./AppBar";
import Heading from './Heading';
import LinkContainer from './LinkContainer';
import styles from './styles.css';
import StyledLink from "./StyledLink";

const AppBar = ({toggleDrawer}) => {
  return <AppBarContainer>
    <IconButton
      icon={"bars"}
      onClick={toggleDrawer}
      buttonClass={styles.iconButton}
      iconClass={styles.icon}
    />
    <Heading>
      <StyledLink to={'/topics'}>Coder daily</StyledLink>
    </Heading>
    <LinkContainer>
      Login
    </LinkContainer>
  </AppBarContainer>;
};

AppBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};

export default AppBar;
