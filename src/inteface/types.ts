import {FavoriteSlice} from '../store/slices/FavoriteSlice';

export interface RootState {
    favorite: ReturnType<typeof FavoriteSlice.reducer>;
}

export interface ICar {
    id: number
    brand: string
    model: string
    color: string
    model_year: number
    img_src: string
    price: string
    description: string
    availability: string
    __typename: string
}

