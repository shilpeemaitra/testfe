// use client
import { useState, useEffect } from 'react';

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorState, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [orderBy, setOrderBy] = useState('name');
  const [order, setOrder] = useState('asc');
  const limit = 20;
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const offset = (page - 1) * limit;
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`; // Changed to const
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const sortedPokemon = data.results.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (orderBy === 'name') {
            return order === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
          }
          return 0;
        });
        setAllPokemon(data.results);
        setPokemon(sortedPokemon);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, [page, limit, orderBy, order]);

  useEffect(() => {
    const filteredPokemon = allPokemon.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
    const sortedPokemon = filteredPokemon.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (orderBy === 'name') {
        return order === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
      }
      return 0;
    });
    setPokemon(sortedPokemon);
  }, [query, allPokemon, orderBy, order]);

  if (loading) return <p>Loading...</p>;
  if (errorState) return <p>Error: {errorState.message}</p>;

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <div className="mb-4 flex items-center">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search Pokémon" className="border border-gray-300 px-3 py-2 rounded flex-grow mr-2" />
        <button type="button" onClick={() => setQuery('')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Clear Search</button>
        <button type="button" onClick={() => {}} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">Search</button>
      </div>
      <div className="mb-4">
        <label htmlFor="orderBySelect">Order By:</label>
        <select id="orderBySelect" value={orderBy} onChange={(e) => setOrderBy(e.target.value)} className="border border-gray-300 px-3 py-2 rounded ml-2">
          <option value="name">Name</option>
          {/* Add other sorting options here */}
        </select>
        <label htmlFor="orderSelect">Order:</label>
        <select id="orderSelect" value={order} onChange={(e) => setOrder(e.target.value)} className="border border-gray-300 px-3 py-2 rounded ml-2">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <ul className="list-disc">
        {pokemon.map((p) => (
          <li key={p.name} className="mb-2">
            <a href={`/pokemon/${p.name}`} className="text-blue-500 hover:underline">{p.name}</a>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-4">
        <button type="button" onClick={() => setPage(page - 1)} disabled={page === 1} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">Previous</button>
        <button type="button" onClick={() => setPage(page + 1)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Next</button>
      </div>
    </div>
  );
};

export default PokemonList;
