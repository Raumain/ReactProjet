import { useParams, Link } from "react-router-dom";
import { useGetUserById } from "../api/user";
import { useGetRepoOfUser } from "../api/repository";

export default function User() {
  const { id } = useParams();
  const { data: user } = useGetUserById(id);
  const { data: repos } = useGetRepoOfUser(user?.login);
  return (
    <div className="flex gap-4">
      <Link to="/" role="button" className="h-fit">
        ⬅️
      </Link>
      {user ? (
        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <img src={user.avatar_url} alt={user.login} className="w-80" />
            <h1>{user.login}</h1>
            <p className="flex flex-wrap">{user.bio}</p>
          </div>
          <div>
            <h2>Repositories</h2>
            <ul className="pl-4">
              <li>Public: {user.public_repos}</li>
              <li>Private: {user.total_private_repos}</li>
              <li>Owned: {user.owned_private_repos}</li>
            </ul>
            <h2>Public Repositories</h2>
            <ul className="pl-4">
              {repos?.map((repo) => (
                <li key={repo.id}>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
