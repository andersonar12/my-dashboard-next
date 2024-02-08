"use client";
import { useAppSelector } from "@/store";
import PokemonGrid from "../../pokemons/components/PokemonGrid";
import { useEffect, useState } from "react";
import { NoFavorites } from "./NoFavorites";
import { Pokemon } from "@/interfaces/pokemons";

export default function FavoritePokemons() {
  const favoritePokemons = useAppSelector((state) => state.pokemons.favorites);

  const [pokemons, setPokemons] = useState(Object.values(favoritePokemons));

  useEffect(() => {
    setPokemons(Object.values(favoritePokemons));
  }, [favoritePokemons]);

  //   console.log(favoritePokemons);
  return <>{pokemons.length === 0 ? <NoFavorites /> : <PokemonGrid pokemons={pokemons} />}</>;
}
