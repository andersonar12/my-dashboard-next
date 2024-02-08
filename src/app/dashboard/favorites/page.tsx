import { Pokemon, PokemonsResponse } from "@/interfaces/pokemons";
import PokemonGrid from "../pokemons/components/PokemonGrid";

export const metadata = {
  title: "Favoritos",
  description: "Pokemons favoritos",
};

const getPokemons = async (limit = 20, offset = 0): Promise<Pokemon[]> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data: PokemonsResponse = await res.json();

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  // console.log({ pokemons });

  return pokemons;
};

export default async function FavouritesPage() {
  const pokemons = await getPokemons(100);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons Favoritos <small className="text-blue-500">Global State</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
