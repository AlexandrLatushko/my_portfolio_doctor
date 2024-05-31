
import { Btn } from '../../../../componets/btn/Btn';
import  MyPhoto  from '../../../images/myphoto.jpeg'
import styled from 'styled-components';



export const Main = () => {
    return (
        <StyledMain>
            <MainBlok>
                <MainTitle>Lorem ipsum dolor amet</MainTitle>
                <MainText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</MainText>
                <Btn text={"Let’s Begin"}/>
            </MainBlok>
            
            <ImagePhoto src={MyPhoto} alt='My Photo'/>
        </StyledMain>
        )
        
};

const StyledMain = styled.section`
    background-color: #e6ffba;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const MainBlok = styled.div`
    max-width: 550px;
`

const MainTitle = styled.h1`
    
`

const MainText = styled.p`
    
`

const ImagePhoto = styled.img`
    width: 380px;
    height: 450px;
    object-fit: cover;
    
`