import { Pokemon } from "@/interfaces/pokemons";
// import Image from "next/image";
import PokemonCard from "./PokemonCard";

export default function PokemonGrid({ pokemons }: { pokemons: Pokemon[] }) {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
        // <Image
        //   key={pokemon.id}
        //   src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        //   alt={pokemon.name}
        //   width={100}
        //   height={100}
        // />
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}
