import { UserType } from "../types/user";
import UserCard from "./UserCard";

const List = ({ users }: { users: Array<UserType> }) => {
  return (
    <div className="">
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

export default List;
