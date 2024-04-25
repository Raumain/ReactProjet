import { useQuery } from "@tanstack/react-query";
import { UserType, UserByIdType } from "../types/user";

export const useGetUsers = (username: string, page = 1) =>
  useQuery<{ users: Array<UserType>; totalCount: number } | undefined>({
    queryKey: ["users", username, page],
    queryFn: async () => {
      return fetch(
        `https://api.github.com/search/users?q=${username}&page=${page}`,
        {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          return { users: data.items, totalCount: data.total_count };
        })
        .catch((error) => {
          return error;
        });
    },
    enabled: Boolean(username),
  });

export const useGetUserById = (id: string | undefined) =>
  useQuery<UserByIdType>({
    queryKey: ["user", id],
    queryFn: async () => {
      return fetch(`https://api.github.com/user/${id}`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      })
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => {
          console.error(error);
          return error;
        });
    },
  });
