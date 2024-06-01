import React from 'react';
import styled from "styled-components";
import { Icon } from "../../../componets/icons/Icon";
import { IconsLink } from "../../../componets/iconslink/IconsLink";
import { theme } from '../../../styles/Theme';
import { Container } from '../../../componets/Container';
import { FlexWrapper } from '../../../componets/FlexWrapper';

export const Header = () => {
    return (
    <StyledHeader>
        <Container>
            <FlexWrapper justify='space-around' align='center'>
                <a href="#" >
                <Icon iconId="logo" width="185" height="48" viewBox="0 0 185 48" />
                </a>
                <StyledHeradrMenu>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Technologies</a>
                    </li>
                    <li>
                        <a href="#">About me</a>
                    </li>
                </StyledHeradrMenu>
                <IconsLink />
            </FlexWrapper>
            
        </Container>
            
    </StyledHeader>
    );

};

const StyledHeader = styled.header`
    background-color: ${theme.color.primaryBg};
    height: 15vh;
    
`

const StyledHeradrMenu = styled.ul`
    display: flex;
    gap: 30px;
`;

