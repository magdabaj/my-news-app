import React from 'react';
import styled from "styled-components";

const Button = styled.button`
    text-transform: uppercase;
    padding: 10px;
    border-radius: 2;
    cursor: pointer;
    color: #00afcc;
    
    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
        font-weight: 700p;
    }
`;

export default Button;