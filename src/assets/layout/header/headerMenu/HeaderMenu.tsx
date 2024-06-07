import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

export const HeaderMenu = () => {
    return (
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
    );
} ;

const StyledHeradrMenu = styled.ul`

    display: flex;
    gap: 30px;

    @media ${theme.media.tablet} {
        display: none;
    }


`;

const ListItem = styled.li`
    
`

const LinkItem = styled.a`
    color: ${theme.color.font};
`