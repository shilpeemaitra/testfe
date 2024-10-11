"use client";

import PokemonList from '../components/PokemonList';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline">
        Pokémon Explorer
      </h1>
      <PokemonList />
    </main>
  );
}
