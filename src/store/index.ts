import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter/counterSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { pokemonsSlice } from "./pokemons/pokemons";
import { localStorageMiddleware } from "./middlewares/localStorageMiddleware";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonsSlice.reducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

//Todo esto  fue copiado de la pagina de Redux Toolkit
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
