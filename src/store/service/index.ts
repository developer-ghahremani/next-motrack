import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const service = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3009/api" }),
  endpoints: (build) => ({}),
  reducerPath: "serviceApi",
  tagTypes: ["User"],
});

export default service;
