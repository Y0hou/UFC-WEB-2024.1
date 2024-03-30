import { useContext } from 'react';
import ComponenteFilho from './ComponenteFilho';
import Pokemon from './ContextPokemon';

const ComponentePai = () => {
    const numero = useContext(Pokemon);
    return(
        <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+1}.png`} alt="pokemon" />
            <ComponenteFilho/>
        </div>
    );
}

export default ComponentePai;