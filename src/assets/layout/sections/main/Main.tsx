
import { Btn } from '../../../../componets/btn/Btn';
import  MyPhoto  from '../../../images/myphoto.jpeg'
import styled from 'styled-components';



export const Main = () => {
    return (
        <StyledMain>
            <div>
                <MainTitle>Lorem ipsum dolor amet</MainTitle>
                <MainText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</MainText>
                <Btn/>
            </div>
            
            <ImagePhoto src={MyPhoto} alt='My Photo'/>
        </StyledMain>
        )
        
};


const StyledMain = styled.section`
    background-color: #e6ffba;
    min-height: 100vh;
    display: flex;
`

const MainTitle = styled.h1`
    
`

const MainText = styled.p`
    
`

const ImagePhoto = styled.img`
    
    
`