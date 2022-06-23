import UserModel from "models/User.model";
import service from "./";

interface UserResponse {
  users: UserModel[];
  page: number;
  total: number;
  per_page: number;
}

const user = service.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<UserResponse, { page?: string; per_page?: string }>({
      query: ({ page = 1, per_page = 20 }) => ({
        url: "/users",
        params: { page, per_page },
      }),
      providesTags: ["User"],
    }),
    deleteUser: build.mutation<any, { id: number }>({
      invalidatesTags: ["User"],
      query: ({ id }) => ({ url: `/users/${id}`, method: "DELETE" }),
    }),
    postUser: build.mutation<
      any,
      { first_name: string; last_name: string; mobile: string }
    >({
      query: (body) => ({ url: "/users", method: "POST", body }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useDeleteUserMutation, usePostUserMutation } =
  user;
