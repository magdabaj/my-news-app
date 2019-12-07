/**
 *
 * IconButton
 *
 */

import React from "react";
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';
import './styles.css';

const IconButton = ({icon, onClick, buttonClass, iconClass}) => {
  return <div
      className={'iconButton'}
      onClick={onClick}
  >
    <FontAwesome
        className={iconClass}
        name={icon}
    />
  </div>;
};

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonClass: PropTypes.string,
  iconClass: PropTypes.string,
};

export default IconButton;
