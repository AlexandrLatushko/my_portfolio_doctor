import React from 'react';
import styled from 'styled-components';
import { IconsLink } from '../../../componets/iconslink/IconsLink';
import { Contacts } from '../../../componets/contakts/Contacts';

export const Footer = () => {
    return (
        <StyledFooter>
            <Contacts/>
            <IconsLink/>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 20vh;
    background-color: #8effb06f;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 42px;
`
