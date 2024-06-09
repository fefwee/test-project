import {combineReducers, configureStore} from '@reduxjs/toolkit';
import favoriteSlice from "./slices/FavoriteSlice";

const rootReducer = combineReducers({
    favorite: favoriteSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
    reducer: rootReducer,
});

export default store;
