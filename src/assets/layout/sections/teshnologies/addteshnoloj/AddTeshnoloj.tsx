import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../../componets/icons/Icon';
import { font } from '../../../../../styles/Common';
import { theme } from '../../../../../styles/Theme';

export const AddTeshnoloj = () => {
    return (
        <StyledAddTeshnoloj>
            <TitleTeshnoloj>Additional technologies and skills</TitleTeshnoloj>
            <TeshnolohIcons>

                <IconWrwpper>
                    <Icon iconId='gitcolor' height='100px' width='100px' viewBox='0 0 100 100'/>
                </IconWrwpper>
                
                <IconWrwpper>
                    <Icon iconId='githubcolor'height='100px' width='100px' viewBox='0 0 100 100'/>
                </IconWrwpper>

                <IconWrwpper>
                    <Icon iconId='figmacolor'height='100px' width='100px' viewBox='0 0 100 100'/>
                </IconWrwpper>
            </TeshnolohIcons>
        </StyledAddTeshnoloj>
    );
};

const StyledAddTeshnoloj = styled.div`
    margin-top: 100px;
    padding-bottom:170px;
`

const TitleTeshnoloj = styled.h3`
    text-align: center;
    ${font({
        weight:600,
        Fmax:44,
        Fmin:30,
    })}
    /* font-weight: 600;
    font-size: 44px; */

`

const TeshnolohIcons = styled.div`
    padding-top:70px;
    display: flex;
    justify-content: center;
    gap: 50px;

    @media ${theme.media.mobile} {
        gap: 18px;
    }
`
const IconWrwpper = styled.a`
    
`