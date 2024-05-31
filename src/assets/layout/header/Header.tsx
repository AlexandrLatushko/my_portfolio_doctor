import React from 'react';
import styled from "styled-components";
import { Icon } from "../../../componets/icons/Icon";
import { IconsLink } from "../../../componets/iconslink/IconsLink";

export const Header = () => {
    return (
    <StyledHeader>
            <a href="#" style={{ display: "inline-block" }}>
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
    </StyledHeader>
    );

};

const StyledHeader = styled.header`
    background-color: #b4f480cc;

    display: flex;
    justify-content: space-between;

    
`

const StyledHeradrMenu = styled.ul`
    display: flex;
    gap: 30px;
`;

