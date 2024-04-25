import { Link } from "react-router-dom";
import { UserType } from "../types/user";

const UserCard = ({ user }: { user: UserType }) => {
  return (
    <div
      key={user.id}
      className="flex items-center justify-between bg-slate-800 border-2 border-slate-700 rounded-lg p-4 my-4"
    >
      <div className="flex items-center gap-4">
        <img src={user.avatar_url} alt={user.login} className="w-20" />
        <div>
          <h1>{user.login}</h1>
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            {user.html_url}
          </a>
        </div>
      </div>
      <Link to={`user/${user.id}`} role="button">
        View more
      </Link>
    </div>
  );
};

export default UserCard;
