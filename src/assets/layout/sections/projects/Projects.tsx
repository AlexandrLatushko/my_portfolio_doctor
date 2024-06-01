import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../../componets/FlexWrapper';
import { SectionsTitle } from '../../../../componets/SectionsTitle';
import projPhoto from '../../../images/prijPhoto.png'
import { Project } from './project/Project';


export const Projects = () => {
    return (
        <StyledProjects>
            <SectionsTitle>Projects</SectionsTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-around'} gap={'20px'}>
                <Project src={projPhoto} title={"PROJECT 1"} 
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                <Project src={projPhoto} title={"PROJECT 2"} 
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                <Project src={projPhoto} title={"PROJECT 3"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
                <Project src={projPhoto} title={"PROJECT 4"} 
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    background-color: #8eedb1;
`