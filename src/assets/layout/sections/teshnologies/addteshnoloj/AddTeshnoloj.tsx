import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../../componets/icons/Icon';

export const AddTeshnoloj = () => {
    return (
        <StyledAddTeshnoloj>
            <TitleTeshnoloj>Additional technologies and skills</TitleTeshnoloj>
            <TeshnolohIcons>
                <Icon iconId='gitcolor' height='100px' width='100px' viewBox='0 0 100 100'/>
                <Icon iconId='githubcolor'height='100px' width='100px' viewBox='0 0 100 100'/>
                <Icon iconId='figmacolor'height='100px' width='100px' viewBox='0 0 100 100'/>
            </TeshnolohIcons>
        </StyledAddTeshnoloj>
    );
};

const StyledAddTeshnoloj = styled.div`
    margin-top: 100px;
    padding-bottom:170px;
`

const TitleTeshnoloj = styled.h3`
    text-align: center;

`

const TeshnolohIcons = styled.div`
    padding-top:70px;
    display: flex;
    justify-content: center;
    gap: 50px
`
