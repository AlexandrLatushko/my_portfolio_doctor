import React from 'react';
import styled from 'styled-components';
import { Btn } from '../../../../../componets/btn/Btn';
import { theme } from '../../../../../styles/Theme';

type ProjectsPropsPype = {
    src: string
    title: string
    text: string
}

export const Project = (props: ProjectsPropsPype) => {
    return (
        <StyledProject>
            <ImageProj src={props.src} alt='my proj'/>
            <ProjTitle>{props.title}</ProjTitle>
            <ProjText>{props.text}</ProjText>
            <BtnContainer>
                <Btn text={"Look It Up"}/>
            </BtnContainer>
            
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color:${theme.color.primaryBg};
    border-radius:  0 40px 0 40px;
    border: 3px solid #A39D9D;
    padding: 25px;
    max-width: 550px;
    height: 670px;
    
`

const ImageProj = styled.img`
    max-width: 500px;
    border-radius: 20px;
`

const ProjTitle = styled.h3`
    
    position: relative;
    margin-top: 40px;
    text-align: center;
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 23px;


    &::before {
        content: "";
        width: 70%; /* Задаем ширину псевдоэлемента */
        height: 4px;
        background-color: #6978D1;
        position: absolute;
        bottom: -23px; /* Отступ вниз для правильного позиционирования */
        left: 50%;
        transform: translateX(-50%); /* Центрируем псевдоэлемент */
    }


`

const ProjText = styled.p`
    max-width: 500px;
    font-weight: 500;
    font-size: 18px;
    text-align: start;
    margin: 40px 0 50px;

`

const BtnContainer = styled.div`
    text-align: left;
`