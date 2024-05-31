import React from 'react';
import styled from 'styled-components';

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
    border: 1px solid red;
    border-radius:5px;
    width: 240px;
    height: 60px;
    margin-top:60px;
`