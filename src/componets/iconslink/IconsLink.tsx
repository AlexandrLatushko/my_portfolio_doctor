import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icons/Icon';
import { theme } from '../../styles/Theme';

export const IconsLink = () => {
    return (
        <StyledIconsLinks>
            <SryledIconsLink>

                <IconContainer>
                    <a href='#'> {<Icon iconId='githubsmoll' width='32' height='32' viewBox="0 0 32 32"/>} </a>
                </IconContainer>

            </SryledIconsLink>
            <SryledIconsLink>

                <IconContainer>
                    <a href='#'> {<Icon iconId='telegramm' width='32' height='32' viewBox="0 0 32 32"/>} </a>
                </IconContainer>

            </SryledIconsLink>    
            <SryledIconsLink>
            
                <IconContainer>
                    <a href='#'> {<Icon iconId='linkedin' width='32' height='32' viewBox="0 0 32 32"/>} </a>
                </IconContainer>

            </SryledIconsLink>
        </StyledIconsLinks>
    );
};

const StyledIconsLinks = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin: 25px 0px;

    @media ${theme.media.tablet} {
        display: none;
    }
`

const SryledIconsLink = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
`
const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
