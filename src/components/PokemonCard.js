import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/PokemonCard.scss";

export const PokemonCard = props => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(props.url).then(res => {
      setPokemon(res.data);
    });
  }, []);

  // Do not render if data isn't fetched yet
  if (pokemon === null) {
    return <div />;
  }

  return (
    <div className="pokemon-card-wrapper">
      <img src={pokemon.sprites.front_default} className='pokemon-card-img' />
      <div className='pokemon-card'> 
        <div className="px-4">
          <p className="pokemon-name">{pokemon.name}</p>
          <p>Weight: {(pokemon.weight / 100).toFixed(2)} Kg</p>
          <p>Height: {pokemon.height * 10} cm</p>
        </div>
        <div className="px-4">
          <p>Abilities</p>
          <div className='d-flex flex-wrap'>
            {pokemon.abilities.map((ability, index) => (
                <div key={index} className='ability-chip'>
                    {ability.ability.name}
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
