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
                    <ListItem>
                        <LinkItem href="#">Projects</LinkItem>
                    </ListItem>
                    <ListItem>
                        <LinkItem href="#">Technologies</LinkItem>
                    </ListItem>
                    <ListItem>
                        <LinkItem href="#">About me</LinkItem>
                    </ListItem>
                </StyledHeradrMenu>
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

const StyledHeradrMenu = styled.ul`
    display: flex;
    gap: 30px;
`;

const ListItem = styled.li`
    
`

const LinkItem = styled.a`
    color: ${theme.color.font};
`
