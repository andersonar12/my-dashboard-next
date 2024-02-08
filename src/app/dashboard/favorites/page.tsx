import FavoritePokemons from "./components/FavoritePokemons";

export const metadata = {
  title: "Favoritos",
  description: "Pokemons favoritos",
};

export default async function FavoritesPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons Favoritos <small className="text-blue-500">Global State</small>
      </span>
      <FavoritePokemons />
    </div>
  );
}
