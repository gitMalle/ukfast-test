import React, { useState, useEffect } from "react";
import { PokemonSidebar } from "./components/PokemonSidebar";
import { PokemonSearch } from "./components/PokemonSearch";
import axios from "axios";
import { POKEMON_API } from "./api";

const App = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios.get(POKEMON_API + "/pokemon?limit=1000").then(res => {
      setAllPokemon(res.data.results);
    });
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-sm-3">
          <PokemonSidebar
            pokemon={allPokemon}
            onSelect={selected => setSelected(selected)}
          />
        </div>
        <div className="col-sm-9">
          <PokemonSearch
            pokemon={allPokemon}
            onChange={() => setSelected(null)}
            selected={selected}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
