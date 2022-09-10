import { createAction, createReducer } from "@reduxjs/toolkit";
import { UserProfile } from "@src/services/argentBank.interface";

export interface AuthState {
  token: string | null;
  profile: UserProfile;
}

export const updateToken = createAction<string>("auth/updateToken");
export const resetToken = createAction("auth/resetToken");
export const updateProfile = createAction<UserProfile>("auth/updateProfile");

const initialState: AuthState = {
  token: null,
  profile: {},
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateToken, (state, action) => {
      state.token = action.payload;
    })
    .addCase(resetToken, (state) => {
      state.token = null;
    })
    .addCase(updateProfile, (state, action) => {
      state.profile = action.payload;
    });
});

export default authReducer;
