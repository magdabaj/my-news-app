/**
 *
 * IconButton
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';
import {icon} from "@fortawesome/fontawesome-svg-core";

function IconButton({icon}) {
  return <div>
    <h1>Icon button</h1>
    <FontAwesome
        // className={iconClass}
        name={icon}
    />
  </div>;
}

IconButton.propTypes = {};

export default IconButton;
