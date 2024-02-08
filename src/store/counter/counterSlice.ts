import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 5,
    isReady: false,
  },
  reducers: {
    initCounterState: (state, action: PayloadAction<number>) => {
      if (state.isReady) return;
      state.counter = action.payload;
      state.isReady = true;
    },
    increment: (state /* action: PayloadAction<any>*/) => {
      state.counter += 1;
    },
    decrement: (state) => {
      if (state.counter === 0) return;
      state.counter -= 1;
    },
    resetCounter: (state, action: PayloadAction<number>) => {
      if (state.counter < 0) action.payload = 0;
      state.counter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, resetCounter, initCounterState } = counterSlice.actions;
