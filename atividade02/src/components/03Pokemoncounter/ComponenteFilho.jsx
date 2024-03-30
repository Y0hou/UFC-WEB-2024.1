import { useContext } from 'react';
import Pokemon from './ContextPokemon';

const ComponenteFilho = () => {
    const numero = useContext(Pokemon);
    return(
        <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero+2}.png`} alt="pokemon" />
        </div>
    );
}

export default ComponenteFilho;