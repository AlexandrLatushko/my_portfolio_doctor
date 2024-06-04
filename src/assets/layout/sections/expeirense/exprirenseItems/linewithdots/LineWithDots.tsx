import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../../../styles/Theme';

type  LineWithDotspropsStyle = {
    left?: string
}

export const LineWithDots = (props:LineWithDotspropsStyle) => {
    return (
        <Container>
            <DotWrapper>
                <Label>2017</Label>
                <Dot left={"-10px"} />
            </DotWrapper>
            <DotWrapper>
                <Label>2019</Label>
                <Dot />
            </DotWrapper>
            <DotWrapper>
                <Label>2021</Label>
                <Dot />
            </DotWrapper>
            <DotWrapper>
                <Label>2023</Label>
                <Dot left={"15px"} />
            </DotWrapper>
            <Line />
        </Container>
    );
};

const Container = styled.div`
    padding: 70px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 75%;
    margin: 0 auto;
    position: relative;
`;

const Line = styled.div`
    height: 8px;
    background: ${theme.color.accent};

    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 0;
    right: 0;
`;

const DotWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

const Dot = styled.div<LineWithDotspropsStyle>`
    width: 25px;
    height: 25px;
    background-color: #f9f9f9;
    border-radius: 50%;
    
    bottom: 28px;
    position: absolute;
    
    left: ${({left}) => left};
    z-index: 1;
`;

const Label = styled.div`
    margin-bottom: 60px; /* Space between label and dot */
`;

