import {
  createApi,
  fetchBaseQuery,
  FetchArgs,
} from "@reduxjs/toolkit/query/react";
import { LocalStorageKeys } from "@src/constants/constants";
import {
  LoginPayload,
  LoginResponse,
  SignUpPayload,
  SignUpResponse,
  UserProfile,
  UserProfilePayload,
} from "./argentBank.interface";

export const argentBankApi = createApi({
  reducerPath: "argentBankApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_ENDPOINT}/api/v1/`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(LocalStorageKeys.AuthToken);
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginPayload>({
      query: (credentials: LoginPayload) => ({
        url: "/user/login",
        method: "POST",
        body: credentials,
      }),
    }),
    signUp: builder.mutation<SignUpResponse, SignUpPayload>({
      query: () => "/user/signup",
    }),
    profile: builder.mutation<UserProfile, UserProfilePayload>({
      query: (body: UserProfilePayload) => ({
        url: "/user/profile",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation, useProfileMutation } =
  argentBankApi;
