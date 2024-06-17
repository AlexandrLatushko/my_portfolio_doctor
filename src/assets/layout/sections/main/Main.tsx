
import { Container } from '../../../../componets/Container';
import { FlexWrapper } from '../../../../componets/FlexWrapper';
import { Btn } from '../../../../componets/btn/Btn';
import  MyPhoto  from '../../../images/myphoto.jpeg'
import styled from 'styled-components';
import Dreving from '../../../images/drawing.png'
import { theme } from '../../../../styles/Theme';
import { font } from '../../../../styles/Common';
import Typewriter from 'typewriter-effect';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify='space-between' align='center' wrap='wrap' >
                    <MainBlok>
                        <MainTitle>
                        <Typewriter
                            options={{
                                strings: ['Lorem ipsum dolor amet'],
                                autoStart: true,
                                loop: true,
                            }}
                            />
                        </MainTitle>
                        <MainText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</MainText>
                        <Btn text={"Let’s Begin"}/>
                    </MainBlok>
                    <RelativeContainer>
                        
                        <PhotoWrapper></PhotoWrapper>
                        <ImagePhoto src={MyPhoto} alt='My Photo'/>
                    </RelativeContainer>
                    
                </FlexWrapper>
            </Container>
            
        </StyledMain>
        )
        
};


const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
    overflow-x: clip;

    ${FlexWrapper}{
        gap: 30px;
        flex: 1 1 100%;

        @media ${theme.media.tablet2} {
            justify-content: center;
        }
    }

    ${Container}{
        display: flex;
        justify-content: center;
    }
`

const MainBlok = styled.div`
    max-width: 550px;
    width: 100%;
    text-align: start;
    
    @media ${theme.media.tablet} {
        text-align: center;
    }
`

const MainTitle = styled.h1`
    ${font({weight:600,
            Fmax: 54,
            Fmin: 40
    })}
    /* font-weight: 600;
    font-size: 54px; */
`

const MainText = styled.p`
    ${font({
        weight:500,
        color: theme.color.fontP,
        Fmax: 18,
        Fmin: 16
    })}
    /* font-weight: 500;
    font-size: 18px;
    color: #bcbcbc; */
    max-width: 480px;
    margin: 15px 0 60px;
`


const RelativeContainer = styled.div`
    position: relative;
    max-width: 400px;
    width:100%;
    height:470px;
    
    &::after {
        content: url(${Dreving});
        max-width: 660px;
        width: 100%;
        height: 660px;

        position: absolute;
        top: 66px;
        left: -5px;
        z-index: 0;
    }
`
const PhotoWrapper = styled.div`
    max-width: 400px;
    position: absolute;
    top:0;
    left:0;
    z-index:1;
    width: 460px;
    height: 470px;
    background-image: linear-gradient(150deg, #8643DC, #00C0FD);
    border-radius: 60px 0 60px 0;

    @media ${theme.media.tablet} {
        width: 350px;
        height: 400px;
    }
`
const ImagePhoto = styled.img` 
    width: 380px;
    height: 450px;
    object-fit: cover;
    border-radius: 60px 0 60px 0;
    z-index:2;

    position: absolute;
    left: 10px;
    top: 10px;

    @media ${theme.media.tablet}{
        width: 330px;
        height: 380px;
    }
    
`