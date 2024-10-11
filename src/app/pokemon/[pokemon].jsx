import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { pokemon: pokemonName } = router.query;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (pokemonName) {
      fetchPokemon();
    }
  }, [pokemonName]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!pokemon) return null;

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      {/* Display other details here */}
    </div>
  );
};

export default PokemonDetails;
