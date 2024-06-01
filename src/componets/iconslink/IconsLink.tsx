import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons/Icon';

export const IconsLink = () => {
    return (
        <StyledIconsLinks>
            <SryledIconsLink>
                <a href='#'> {<Icon iconId='githubsmoll'/>} </a>
            </SryledIconsLink>
            <SryledIconsLink>
                <a href='#'> {<Icon iconId='telegramm'/>} </a>
            </SryledIconsLink>
            <SryledIconsLink>
                <a href='#'> {<Icon iconId='linkedin'/>} </a>
            </SryledIconsLink>
        </StyledIconsLinks>
    );
};

const StyledIconsLinks = styled.ul`
    display: flex;
    gap: 20px;
    margin: 25px 0px;
`

const SryledIconsLink = styled.li`
    
`

