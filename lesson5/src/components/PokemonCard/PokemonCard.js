import React, {useEffect, useState} from 'react';
import styles from "./PokemonCard.module.scss";

const getPokemonData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()
    }
    catch (error) {
        return (error);
    }
}

const PokemonCard = ({pokemon}) => {
    const [pokemonData, setPokemonData] = useState(null)
  
    
    
    
    useEffect(() => {
        const url = pokemon.url
        getPokemonData(url)
            .then(data => setPokemonData(data))
    }, [pokemon])

    return (
        <div className={styles.pokemonCard}>
            <div className={styles.pokeInfo}>
                <img src={pokemonData?.sprites?.other?.dream_world?.front_default} alt="pokemonData"/>
                <h3>{pokemon.name}</h3>
            </div>
            <button>
                Подробнее
            </button>
        </div>
    );
};

export default PokemonCard;