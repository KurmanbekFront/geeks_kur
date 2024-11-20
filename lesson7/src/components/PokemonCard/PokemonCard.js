import React, { useEffect, useState } from "react";
import styles from "./PokemonCard.module.scss";
import ModalPokemon from "../modalPokemon/ModalPokemon";

const PokemonCard = ({ pokemon }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  const getPokemonData = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const url = pokemon.url;
    getPokemonData(url).then((data) => setPokemonData(data));
  }, [pokemon]);

  return (
    <div>
      {
        loading ? <div>loading</div> : <div className={styles.pokemonCard}>
          <div className={styles.pokeInfo}>
            <img src={pokemonData?.sprites?.other?.dream_world?.front_default} alt="pokemonData"/>
            <h3>{pokemon.name}</h3>
          </div>
          <button onClick={handleShow}>Подробнее</button>
        </div>
      }
      {
        show && <ModalPokemon handleShow={handleShow}>
                    <h3>{pokemon.name}</h3>
                <div>Abilities: {pokemonData.abilities.map(value=> value.ability.name).join(', ')}</div>
                <div>Some moves: {pokemonData.moves.slice(0,5).map(value=> value.move.name).join(', ')}</div>
                </ModalPokemon>
      }
    </div>
  );
};

export default PokemonCard;
