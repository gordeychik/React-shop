// favoriteSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavoriteItem {
  id: number;
  brand: string;
  name: string;
  image: string;
  size: number;
  price: string;
}

interface FavoriteState {
  items: FavoriteItem[];
}

const initialState: FavoriteState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorite: (state, action: PayloadAction<FavoriteItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
    removeFromFavorite: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
export type { FavoriteState };