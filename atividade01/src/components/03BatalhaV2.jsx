import { cloneElement } from 'react';
import './style.css';

export const Hero = ({name, img, arena}) => {
    return(
        <div>
            <h3>{name} - {arena}</h3>
            <img src={img} alt="imagem de heroi"/>
        </div>
    );
}

export const Enemy = ({name, img, arena}) => {
    return(
        <div>
            <h3>{name} - {arena}</h3>
            <img src={img} alt="imagem de inimigo"/>
        </div>
    );
}

export const Arena = ({arena, children}) => {
    return(
        <div>
            {children.map(e => (
                cloneElement(e, {arena: arena})
            ))}            
        </div>
    );
}

export const World = ({children}) => {
    return(
        <>
            {children}
        </>
    );
}