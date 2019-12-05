import React, { useState, useEffect } from "react";
import axios from "axios";
import { POKEMON_API } from "../api";
import "../styles/PokemonSidebar.scss";

// I wrote this component first and then realized there is no search API endpoint, so I needed to fetch all Pokemon anyways.
// However, I left it here as the API returns the URLs for the next/previous page of results and I initally thought this would be the proper way to do it.
// Also, performance would be better this way.
export const PokemonSidebarOptimized = props => {
  const [allPokemon, setAllPokemon] = useState([]);
  // url for next/prev page of results
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    fetchPokemon(POKEMON_API + "/pokemon?limit=17");
  }, []);

  const fetchPokemon = async url => {
    const res = await axios.get(url);
    const { data } = res;
    setAllPokemon(data.results);
    setNext(data.next);
    setPrev(data.previous);
  };

  return (
    <div className="pokedex">
      <h1>Pokédex</h1>
      <p>List of Pokémon</p>
      {allPokemon.map(pokemon => (
        <div className="pokedex-card">{pokemon.name}</div>
      ))}
      <div className="pokedex-buttons">
        {prev && (
          <button className="pokedex-btn" onClick={() => fetchPokemon(prev)}>
            Prev
          </button>
        )}
        {next && (
          <button className="pokedex-btn" onClick={() => fetchPokemon(next)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};
