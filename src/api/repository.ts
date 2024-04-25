import { useQuery } from "@tanstack/react-query";
import { RepoType } from "../types/repo";

export const useGetRepoOfUser = (username: string | undefined) =>
  useQuery<Array<RepoType>>({
    queryKey: ["repoOfUser", username],
    queryFn: async () => {
      return fetch(`https://api.github.com/users/${username}/repos`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      })
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => {
          return error;
        });
    },
  });
