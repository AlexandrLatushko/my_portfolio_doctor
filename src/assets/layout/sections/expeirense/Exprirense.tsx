import React from 'react';
import styled from 'styled-components';
import { SectionsTitle } from '../../../../componets/SectionsTitle';
import { ExprirenseItems } from './exprirenseItems/ExprirenseItems';
import { FlexWrapper } from '../../../../componets/FlexWrapper';
import { Container } from '../../../../componets/Container';

export const Exprirense = () => {
    return (
        <StyledExprirense>
            <Container>
                <SectionsTitle>Experience</SectionsTitle>
                <ExprirenseItems/>
                <FlexWrapper justify='space-between'>
                    <ExprirenseDeskription>Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin</ExprirenseDeskription>
                    <ExprirenseDeskription>Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin</ExprirenseDeskription>
                    <ExprirenseDeskription>Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin</ExprirenseDeskription>
                    <ExprirenseDeskription>Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin</ExprirenseDeskription>
                </FlexWrapper>
            </Container>
            

        </StyledExprirense>

    );
};

const StyledExprirense = styled.section`

`

const ExprirenseDeskription = styled.p`
    max-width: 260px;
`