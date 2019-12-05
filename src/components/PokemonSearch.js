import React, { useState, useEffect } from "react";
import { PokemonCard } from "./PokemonCard";

export const PokemonSearch = props => {
  const [searchText, setText] = useState('');
  const [results, setResults] = useState([]);
  const { pokemon } = props;
  const MIN_CHARS = 3;

  // filter results everytime the search text changes
  // I set the minimum to 3 characters to prevent too many API calls, as the Pokemon profile has to be fetched separately
  useEffect(() => {
    searchText.length >= MIN_CHARS
      ? setResults(pokemon.filter(p => p.name.includes(searchText)))
      : setResults([]);
  }, [searchText]);

  return (
    <div className="mt-3">
      <input
        type="text"
        placeholder="Search"
        className="w-100 form-control"
        value={searchText}
        onChange={ev => setText(ev.target.value)}
      />
      <div className="mt-5">
        {results.map(result => (
            <PokemonCard url={result.url} />
        ))}
        {(results.length === 0 && searchText.length >= MIN_CHARS) && 
            <h2>No results found.</h2>
        }
        {searchText.length > 0 && searchText.length < MIN_CHARS && 
            <h2>Please enter at least 3 characters.</h2>
        }
      </div>
    </div>
  );
};
