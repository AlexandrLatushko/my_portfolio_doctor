import React from 'react';
import styled from "styled-components";
import { Icon } from "../../../componets/icons/Icon";
import { IconsLink } from "../../../componets/iconslink/IconsLink";
import { Container } from '../../../componets/Container';
import { FlexWrapper } from '../../../componets/FlexWrapper';
import { HeaderMenu } from './headerMenu/HeaderMenu';
import { MobileMenu } from './mobieleMenu/MobileMenu';

export const Header = () => {
    return (
    <StyledHeader>
        <Container>
            <FlexWrapper justify='space-between' align='center'>
                <a href="#" ><Icon iconId="logo" width="185" height="48" viewBox="0 0 185 48" /></a>
                <HeaderMenu/>
                <MobileMenu/>
                <IconsLink />
            </FlexWrapper>
            
        </Container>
            
    </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #0f1624b4;
    padding: 20px 0;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    z-index: 3;
    
`



