import React from 'react';
import styled from "styled-components";

const LinkAnchor = styled.a`
    text-decoration: none;
    color: inherit;
    
    &:hover {
        text-decoration: underline;
    }
`;

export default LinkAnchor;