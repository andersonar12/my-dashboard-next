import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../../interfaces/pokemons";

interface PokemonsState {
  favorites: { [key: string]: Pokemon };
}

export const getInitialState = (): PokemonsState => {
  const pokemons = localStorage.getItem("favoritesPokemons");

  return pokemons ? JSON.parse(pokemons) : {};
};

const initialState: PokemonsState = {
  favorites: {},
  // ...getInitialState(),
};

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<{ [key: string]: Pokemon }>) {
      state["favorites"] = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<Pokemon>) => {
      const pokemon = action.payload;
      if (pokemon["id"] in state["favorites"]) {
        delete state["favorites"][pokemon.id];
      } else {
        state["favorites"][pokemon.id] = pokemon;
      }

      //TODO: esto no se debe hacer en REDUX
      localStorage.setItem("favoritesPokemons", JSON.stringify(state["favorites"]));
      // state[action.payload['id']] = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;
