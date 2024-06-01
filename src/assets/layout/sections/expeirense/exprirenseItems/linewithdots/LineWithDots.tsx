import React from 'react';
import styled from 'styled-components';

export const LineWithDots = () => {
    return (
        <Container>
            <DotWrapper>
                <Label>2017</Label>
                <Dot />
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
                <Dot />
            </DotWrapper>
            <Line />
        </Container>
    );
};

const Container = styled.div`
    padding: 70px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 75%;
    margin: 0 auto;
    position: relative;
`;

const Line = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 8px;
    background-color: #6060f6;
    transform: translateY(-50%);
`;

const DotWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

const Dot = styled.div`
    width: 25px;
    height: 25px;
    background-color: #f9f9f9;
    border-radius: 50%;
    z-index: 1;
    position: absolute;
    bottom: 28px;
`;

const Label = styled.div`
    margin-bottom: 60px; /* Space between label and dot */
`;

