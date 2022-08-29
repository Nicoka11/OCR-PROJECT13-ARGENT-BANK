import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  LoginPayload,
  LoginResponse,
  SignUpPayload,
  SignUpResponse,
} from "./argentBank.interface";

export const argentBankApi = createApi({
  reducerPath: "argentBankApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API_ENDPOINT}/api/v1/`,
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
  }),
});

export const { useLoginMutation, useSignUpMutation } = argentBankApi;
