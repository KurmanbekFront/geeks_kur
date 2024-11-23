import React, { useEffect, useState } from "react";
import PokemonCard from "../../components/PokemonCard/PokemonCard.js";
import styles from "./PokemonPage.module.scss";
import Pagination from "../../components/pagination/Pagination.js";

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  const [limit, setLimit] = useState(12);
  const page = offset / Number(limit) + 1;
  const handleNext = () => {
    setOffset((prevState) => prevState + Number(limit));
  };
  const handlePrev = () => {
    if (offset < 1) return;
    setOffset((prevState) => prevState - Number(limit));
  };
  const getPokemons = async () => {
    // https://pokeapi.co/api/v2/pokemon?offset=20&limit=20
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
      );
      return await response.json();
    } catch (error) {
      return error.message;
    }
  };

  useEffect(() => {
    getPokemons().then((data) => setPokemons(data.results));
  }, [offset, limit]);

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h2>Pokemon</h2>
      </div>
      <div className={styles.pokemonList}>
        {pokemons.map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} key={index} />
        ))}
      </div>
      <Pagination page={page} prev={handlePrev} next={handleNext} />
    </div>
  );
};

export default PokemonPage;
