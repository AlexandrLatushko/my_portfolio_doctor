import React from 'react';
import styled from 'styled-components';

export const Btn = () => {
    return (
        <StyledBtn>
            <a href='#'>Let’s Begin</a>
        </StyledBtn>
    );
};

const StyledBtn = styled.button`
    border: 1px solid red;
    border-radius:5px;
`