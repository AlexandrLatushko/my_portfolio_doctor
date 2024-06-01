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

const StyledProgressBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ProgressBarContainer: React.FC<ProgressBarContainerProps> = ({ percentage, title }) => {
    return (
        <div style={{width:'50%', marginTop: '40px'}}>
            <Title >{title}</Title>
            <StyledProgressBarContainer>
                <Filler percentage={percentage} />
            </StyledProgressBarContainer>
        </div>
    );
};

const StyledProgressBarContainer = styled.div`
    /* width: 50%; */
    background-color: #e0e0e0;
    border-radius: 25px;
    overflow: hidden;
    position: relative;
    /* margin-top: 40px; */
    /* padding-top: 20px;  */
`;

const Title = styled.div`
    top: -30px;
    font-size: 14px;
    color: #333;
    padding: 2px 5px;
    text-align: left;
    padding-bottom: 10px;
`;

const Filler = styled.div<{ percentage: number }>`
    height: 10px;
    width: ${props => props.percentage}%;
    background-color: #9cefe8;
    transition: width 0.5s ease-in-out;
`;