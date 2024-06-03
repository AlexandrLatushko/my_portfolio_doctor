
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
                        <MainText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</MainText>
                        <Btn text={"Let’s Begin"}/>
                    </MainBlok>
                    <PhotoWrapper>
                        <ImagePhoto src={MyPhoto} alt='My Photo'/>
                        <ImageDreving src={Dreving} alt='dreving'/>
                    </PhotoWrapper>
                    
                </FlexWrapper>
            </Container>
            
        </StyledMain>
        )
        
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;

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
    position: relative;

`

const ImageDreving = styled.img`
    position: absolute;
    right: -77%;
    z-index: 0;
`

const ImagePhoto = styled.img` 
    position: relative;
    width: 380px;
    height: 450px;
    object-fit: cover;
    border: 5px solid #8643DC;
    border-radius: 0 40px 0 40px;
    z-index: 1;
`