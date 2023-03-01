import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");

const initialState = {
  id: null,
  firstName: null,
  lastName: null,
  email: null,
};

export default createReducer(initialState, {
  [setUser]: (state, action) => action.payload,
});
