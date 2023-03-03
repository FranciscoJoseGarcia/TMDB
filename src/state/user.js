import { createAction, createReducer } from "@reduxjs/toolkit";
import { message } from "antd";

export const setUser = createAction("SET_USER");
export const addFavorites = createAction("ADD_FAVORITES");
export const removeFavorites = createAction("REMOVE_FAVORITES");

const initialState = {
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  favorites: [],
};

export default createReducer(initialState, {
  [setUser]: (state, action) => action.payload,
  [addFavorites]: (state, action) => {
    if (state.favorites.find((fav) => fav.id === action.payload.id)) {
      message.error(`already in favorites`);
      return state;
    }
    message.success(`added to favorites`);

    return { ...state, favorites: [...state.favorites, action.payload] };
  },
  [removeFavorites]: (state, action) => {
    message.success(`removed from favorites`);
    return {
      ...state,
      favorites: state.favorites.filter((fav) => fav.id !== action.payload.id),
    };
  },
});
