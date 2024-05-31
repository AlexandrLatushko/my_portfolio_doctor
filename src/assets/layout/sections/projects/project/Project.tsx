import React from 'react';
import styled from 'styled-components';
import { Btn } from '../../../../../componets/btn/Btn';

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
            <Btn text={"Look It Up"}/>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: #b7eae3;
`

const ImageProj = styled.img`
    max-width: 500px
`
const ProjTitle = styled.h3`
    
`

const ProjText = styled.p`
max-width: 500px

`