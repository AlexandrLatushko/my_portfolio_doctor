import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

type BtnPropsType = {
    text: string
}

export const Btn = (props: BtnPropsType ) => {
    return (
        <StyledBtn>
            <a href='#'>{props.text}</a>
        </StyledBtn>
    );
};

const StyledBtn = styled.button`
    border-radius:25px;
    width: 240px;
    height: 60px;
    border: none;
    background: ${theme.color.accent}; 
    



`