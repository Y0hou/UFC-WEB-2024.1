import ComponentePai from './ComponentePai';
import Pokemon from './ContextPokemon';

const ComponenteAvo = () => {
    const numero = 30;
    return(
        <Pokemon.Provider value={numero}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`} alt="pokemon" />
            <ComponentePai />
        </Pokemon.Provider>
    );
}

export default ComponenteAvo;