import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';

export const Contacts = () => {
    return (
        <StyledContakts>
            <Tel>
                <LabelText>Call me:</LabelText>
                <ContactText href='tel:+123456789'>123-456-789</ContactText>
            </Tel>
            <Email>
                <LabelText>Email</LabelText>
                <ContactText href="mailto:example@example.com">xxx@xyz.com</ContactText>
            </Email>
        </StyledContakts>
    );
};

const StyledContakts = styled.div`
    display: flex;
    text-align: start;
    gap: 160px;
    ;

    @media ${theme.media.mobile}{
        gap: 30px;
    }
`

const Tel = styled.div`
    display: flex;
    flex-direction: column;
    
`

const Email = styled.div`
    display: flex;
    flex-direction: column;

`

const LabelText = styled.span`
    
`

const ContactText = styled.a`
    
`