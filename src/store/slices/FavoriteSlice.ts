import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {ICar} from "../../inteface/types";

interface FavoriteState {
    favorites: ICar[];
    activeItems: number[];
}

const initialState: FavoriteState = {
    favorites: [],
    activeItems: [],
};

export const FavoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<ICar>) => {
            state.favorites.push(action.payload);
            state.activeItems.push(action.payload.id);
        },
        removeFavorite: (state, action: PayloadAction<number>) => {
            const idToRemove = Number(action.payload);
            state.favorites = state.favorites.filter((item) => item.id !== idToRemove);
            state.activeItems = state.activeItems.filter((id) => id !== idToRemove);
        },
    },
});

export const {addFavorite, removeFavorite} = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
