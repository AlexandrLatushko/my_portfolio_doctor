import React from 'react';
import iconsSprite from '../../assets/images/icons_spriter.svg'

type IconPropsPype = {
    iconId:string
    width?: string
    height?:string
    viewBox?: string
    
}  

export const Icon = (props: IconPropsPype) => {
    return (
        <svg widths={props.width ||"50"} height={props.height || "50"} viewBox={props.viewBox ||"0 0 50 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/> 
        </svg>
    );
};

