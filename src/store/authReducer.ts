import { createAction, createReducer } from "@reduxjs/toolkit";

export interface AuthState {
  token: string | null;
}

export const updateToken = createAction<string>("auth/updateToken");
export const resetToken = createAction("auth/resetToken");

const initialState: AuthState = { token: null };

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateToken, (state, action) => {
      state.token = action.payload;
    })
    .addCase(resetToken, (state) => {
      state.token = null;
    });
});

export default authReducer;
