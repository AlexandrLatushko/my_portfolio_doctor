
import { Container } from '../../../../componets/Container';
import { FlexWrapper } from '../../../../componets/FlexWrapper';
import { Btn } from '../../../../componets/btn/Btn';
import  MyPhoto  from '../../../images/myphoto.jpeg'
import styled from 'styled-components';
import Dreving from '../../../images/drawing.png'



export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify='space-between' align='center' >
                    <MainBlok>
                        <MainTitle>Lorem ipsum dolor amet</MainTitle>
                        <MainText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</MainText>
                        <Btn text={"Let’s Begin"}/>
                    </MainBlok>
                    <PhotoWrapper>
                        <ImagePhoto src={MyPhoto} alt='My Photo'/>
                    </PhotoWrapper>
                    
                </FlexWrapper>
            </Container>
            
        </StyledMain>
        )
        
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
    overflow-x: clip;
`

const MainBlok = styled.div`
    max-width: 550px;
    width: 100%;
    text-align: start;
`

const MainTitle = styled.h1`
    font-weight: 600;
    font-size: 54px;
`

const MainText = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: #bcbcbc;
    max-width: 480px;
    margin: 15px 0 60px;
`

const PhotoWrapper = styled.div`
    max-width: 100%;
    position: relative;
    
    &::before {
        content: " ";
        display: inline-block;
        width: 660px;
        height: 660px;
        background-image: url(${Dreving});

        position: absolute;
        z-index: 1;
    }
`


const ImagePhoto = styled.img` 
    width: 380px;
    height: 450px;
    object-fit: cover;
    border: 5px solid #8643DC;
    border-radius: 0 40px 0 40px;

    position: relative;
    z-index: 2;
`