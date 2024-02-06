import { Pokemon, PokemonsResponse } from "@/interfaces/pokemons";
import PokemonGrid from "./components/PokemonGrid";

export const metadata = {
  title: "Pokemons",
  description: "Listado de pokemons",
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

export default async function PokemonsPage() {
  const pokemons = await getPokemons(100);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemons <small>estatico</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
