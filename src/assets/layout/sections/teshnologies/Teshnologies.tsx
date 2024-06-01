// Teshnologies.js
import React from 'react';
import styled from 'styled-components';
import { SectionsTitle } from '../../../../componets/SectionsTitle';
import { FlexWrapper } from '../../../../componets/FlexWrapper';
import { ProgressBar } from './progressbar/ProgressBar';
import { AddTeshnoloj } from './addteshnoloj/AddTeshnoloj';

export const Teshnologies = () => {
    return (
        <StyledTeshnologies>
            <SectionsTitle>Technologies</SectionsTitle>
                
            <FlexWrapper wrap='wrap' gap='50px'>
                <ProgressBar percentage={40} title={'Html'}/>
                <ProgressBar percentage={60} title={'Css, Sass'}/>
                <ProgressBar percentage={80} title={'React'}/>
                <ProgressBar percentage={45} title={'Styled components'}/>
            </FlexWrapper>
                
            <AddTeshnoloj/>
        </StyledTeshnologies>
    );
};

const StyledTeshnologies = styled.section`
    background-color: #baa0a072;
    min-height: 100vh;
`;