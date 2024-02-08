"use client";
import { Provider } from "react-redux";
import { store } from ".";
import { useEffect } from "react";
import { setFavoritePokemons } from "./pokemons/pokemons";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favoritesPokemons") || "{}");

    store.dispatch(setFavoritePokemons(favorites));
  }, []);
  return <Provider store={store}>{children}</Provider>;
}
