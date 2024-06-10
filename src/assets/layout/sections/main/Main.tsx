
import { Container } from '../../../../componets/Container';
import { FlexWrapper } from '../../../../componets/FlexWrapper';
import { Btn } from '../../../../componets/btn/Btn';
import  MyPhoto  from '../../../images/myphoto.jpeg'
import styled from 'styled-components';
import Dreving from '../../../images/drawing.png'
import { theme } from '../../../../styles/Theme';
import { font } from '../../../../styles/Common';



export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify='space-around' align='center'wrap='wrap' >
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

    ${FlexWrapper}{
        gap: 30px;
        flex: 1 1 100%;
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

    @media ${theme.media.tablet} {
        margin-top: 30px;
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

    @media ${theme.media.mobile} {
        width: 340px;
        height: 400px;
    }
`