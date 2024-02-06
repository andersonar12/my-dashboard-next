import { Pokemon } from "@/interfaces/pokemons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoHeartOutline } from "react-icons/io5";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          <div className="flex justify-center">
            <Image
              key={pokemon.id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
              width={100}
              height={100}
              priority={false}
            />
          </div>
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize"> {pokemon.name}</p>
          {/* <p className="text-sm text-gray-100">John@Doe.com</p> */}
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${pokemon.name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100 hover:bg-gray-400"
            >
              Explorar Pokemon
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link href="/account/main" className="px-4 py-2 hover:bg-gray-100 flex">
            <div className="text-gray-800">
              <IoHeartOutline size={30} />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">No es favorito</p>
              <p className="text-xs text-gray-500">Haz click en el Pokemon</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
