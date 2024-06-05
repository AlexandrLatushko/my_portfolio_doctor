import React from 'react';
import styled from 'styled-components';
import { SectionsTitle } from '../../../../componets/SectionsTitle';
import { Container } from '../../../../componets/Container';
import { theme } from '../../../../styles/Theme';

export const Exprirense = () => {
    return (
        <StyledExprirense>
            <Container>
                <SectionsTitle>Experience</SectionsTitle>
                {/* <FlexWrapper justify='space-between'align='center'> */}
                    <List>
                        <ListItem>
                            <Lible>2017</Lible>
                            <Dot/>
                            <Deskription>Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin</Deskription>
                        </ListItem>

                        <ListItem>
                            <Lible>2019</Lible>
                            <Dot/>
                            <Deskription>Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin</Deskription>
                        </ListItem>

                        <ListItem>
                            <Lible>2021</Lible>
                            <Dot/>
                            <Deskription>Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin</Deskription>
                        </ListItem>

                        <ListItem>
                            <Lible>2023</Lible>
                            <Dot/>
                            <Deskription>Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin</Deskription>
                        </ListItem>
                    </List>
                {/* </FlexWrapper> */}
            </Container>
            

        </StyledExprirense>

    );
};

const StyledExprirense = styled.section`

`

const List = styled.ul`
    display: flex;

    justify-content: space-between;
    align-items: center;
    gap: 35px;

    position: relative;
    z-index: 0;

    &::after {
        content: "";
        display: inline-block;
        width: 77%;
        height: 8px;
        background: ${theme.color.accent};
        position: absolute;
        top: 27px;
        left: 11%;
        z-index: -1;
    }
`

const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const Lible = styled.span`
    
`

const Dot = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${theme.color.font};
`
const Deskription = styled.p`
    
`

