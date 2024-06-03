import React from 'react';
import styled from 'styled-components';
import { IconsLink } from '../../../componets/iconslink/IconsLink';
import { Contacts } from '../../../componets/contakts/Contacts';
import { theme } from '../../../styles/Theme';
import { Container } from '../../../componets/Container';
import { FlexWrapper } from '../../../componets/FlexWrapper';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify='space-between' align='center'>
                    <Contacts/>
                    <IconsLink/>
                </FlexWrapper>
                
            </Container>
            
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    /* min-height: 20vh; */
    background-color: ${theme.color.primaryBg};
`
