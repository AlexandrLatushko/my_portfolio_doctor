import React from 'react';
import styled from 'styled-components';
import { SectionsTitle } from '../../../../componets/SectionsTitle';
import { ExprirenseItems } from './exprirenseItems/ExprirenseItems';
import { FlexWrapper } from '../../../../componets/FlexWrapper';

export const Exprirense = () => {
    return (
        <StyledExprirense>
            <SectionsTitle>Experience</SectionsTitle>
            <ExprirenseItems/>
            <FlexWrapper justify='space-around'>
                <ExprirenseDeskription>Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin</ExprirenseDeskription>
                <ExprirenseDeskription>Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin</ExprirenseDeskription>
                <ExprirenseDeskription>Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin</ExprirenseDeskription>
                <ExprirenseDeskription>Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin</ExprirenseDeskription>
            </FlexWrapper>

        </StyledExprirense>

    );
};

const StyledExprirense = styled.section`
    background-color: #faddb4;
    min-height: 100vh;
    padding-top: 100px;

`



const ExprirenseDeskription = styled.p`
    max-width: 260px;
`