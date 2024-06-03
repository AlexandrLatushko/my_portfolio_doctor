import React from 'react';
import styled from 'styled-components';

type ProgressBarContainerProps = {
    percentage: number;
    title: string;
};

export const ProgressBar: React.FC<ProgressBarContainerProps> = ({ percentage, title }) => {
    return (
        <StyledProgressBar>
            <ProgressBarContainer percentage={percentage} title={title} />
        </StyledProgressBar>
    );
};

const ProgressBarContainer: React.FC<ProgressBarContainerProps> = ({ percentage, title }) => {
    return (
        <StyleBar>
            <Title >{title}</Title>
            <StyledProgressBarContainer>
                <Filler percentage={percentage} />
            </StyledProgressBarContainer>
        </StyleBar>
    );
};

const StyleBar = styled.div`
    width:85%;
    margin-top: 25px;
    text-align: left;
`

const StyledProgressBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const StyledProgressBarContainer = styled.div`
    background-color: #162950;
    border-radius: 25px;
    overflow: hidden;
`;

const Title = styled.span`
    top: -30px;
    font-weight: 600;
    font-size: 24px;
    padding: 2px 5px;
    text-align: left;
    padding-bottom: 10px;
`;

const Filler = styled.div<{ percentage: number }>`
    height: 10px;
    width: ${props => props.percentage}%;
    background-color: #13ADC7;
    transition: width 0.5s ease-in-out;
    border-radius: 25px;
`;