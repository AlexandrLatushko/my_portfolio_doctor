import styled, {css} from "styled-components";
import { theme } from "../../../../styles/Theme";

export const MobileMenu = () => {
    return (
        <ContainerMenu>
            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={true}>
                <ul>
                    <ListItem>
                        <LinkItem href="#">Projects</LinkItem>
                    </ListItem>
                    <ListItem>
                        <LinkItem href="#">Technologies</LinkItem>
                    </ListItem>
                    <ListItem>
                        <LinkItem href="#">About me</LinkItem>
                    </ListItem>
                </ul>
            </MobileMenuPopup>
            
        </ContainerMenu>
        
    );
} ;

const ContainerMenu = styled.div`

    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }

`;

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;       //так мы фиксируем и растягиваем свой попап(всплыв меню на мобтлках) по всему окну
    left: 0; 
    right: 0;
    bottom: 0;
    z-index: 9999; //делаем чтьобы наш попап был над всеми элеиентами 
    background-color: hsla(240, 2%, 12%, 0.9);
    display: none;

    ${props => props.isOpen && css<{isOpen: boolean}> `
        display: flex;
        align-items: center;
        justify-content: center;
    `}


    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 30px;
        align-items: center;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;   
    height: 200px;
    z-index: 99999999;
    background-color: hsla(240, 2%, 12%, 0); //делаем прозрачный фон для кнопки


    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.color.font};
        position: absolute;
        left: 40px;
        bottom: 50px;
    
        //при приходе пропсов по открытию/закрытию попапменю будут применяться эти условия 
        ${props => props.isOpen && css<{isOpen: boolean}> `
        background-color: rgba(255, 255, 255, 0);   
    `}

        &::before{
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.color.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}> `
                transform: rotate(-45deg) translateY(0px);
            `}    
        }

        &::after{
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.color.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}> `
            transform: rotate(45deg) translateY(0px);
            width: 36px;
            `}
        }
    }
`




const ListItem = styled.li`
    
`

const LinkItem = styled.a`
    color: ${theme.color.font};
`