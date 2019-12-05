import React, { useState } from "react";
import "../styles/PokemonSidebar.scss";

export const PokemonSidebar = props => {
  const [page, setPage] = useState(0);
  const { pokemon } = props;

  // number of items per page
  const OFFSET = 17;
  const LAST_PAGE = (pokemon.length / OFFSET).toFixed(0) - 1;

  return (
    <div className="pokedex">
      <h1>Pokédex</h1>
      <p>List of Pokémon</p>
      {/* slice 17 items from array at the current page  */}
      {pokemon.slice(page * OFFSET, page * OFFSET + OFFSET).map(pokemon => (
        <div key={pokemon.name} className="pokedex-card">
          {pokemon.name}
        </div>
      ))}
      <div className="pokedex-buttons">
        {page !== LAST_PAGE && (
          <button className="pokedex-btn" onClick={() => setPage(page + 1)}>
            Next
          </button>
        )}
        {page !== 0 && (
          <button className="pokedex-btn" onClick={() => setPage(page - 1)}>
            Prev
          </button>
        )}
      </div>
    </div>
  );
};
