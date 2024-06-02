// Teshnologies.js
import React from 'react';
import styled from 'styled-components';
import { SectionsTitle } from '../../../../componets/SectionsTitle';
import { FlexWrapper } from '../../../../componets/FlexWrapper';
import { ProgressBar } from './progressbar/ProgressBar';
import { AddTeshnoloj } from './addteshnoloj/AddTeshnoloj';
import { Container } from '../../../../componets/Container';

export const Teshnologies = () => {
    return (
        <StyledTeshnologies>
            <Container>
                <SectionsTitle>Technologies</SectionsTitle>
                <FlexWrapper wrap='wrap' gap='50px'>
                    <ProgressBar percentage={40} title={'Html'}/>
                    <ProgressBar percentage={60} title={'Css, Sass'}/>
                    <ProgressBar percentage={80} title={'React'}/>
                    <ProgressBar percentage={45} title={'Styled components'}/>
                </FlexWrapper>
                <AddTeshnoloj/>
            </Container>
        </StyledTeshnologies>
    );
};

const StyledTeshnologies = styled.section`
    min-height: 100vh;
`;