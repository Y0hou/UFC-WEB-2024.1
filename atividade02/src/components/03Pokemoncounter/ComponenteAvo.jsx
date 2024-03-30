import { useState } from 'react';
import ComponentePai from './ComponentePai';
import Pokemon from './ContextPokemon';

const ComponenteAvoCounter = () => {
    const [count, setCount] = useState(1);
    
    return(
        <Pokemon.Provider value={count}>
            <button 
                onClick={() => setCount(count+1)}
                style={{backgroundColor: "#1E90FF", border: "none", borderRadius: 4, color: "#fff", display: "block", marginTop: 16, padding: 8}}
            >
                Adicionar
            </button>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${count}.png`} alt="pokemon" />
            <ComponentePai />
        </Pokemon.Provider>
    );
}

export default ComponenteAvoCounter;