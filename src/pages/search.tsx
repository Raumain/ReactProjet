import { useState } from "react";
import { useGetUsers } from "../api/user";
import Searchbar from "../components/Search";
import List from "../components/List";

export default function Search() {
  const [userSearch, setUserSearch] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const { data, isLoading } = useGetUsers(userSearch, pageCount);
  return (
    <>
      <Searchbar setUserSearch={setUserSearch} />
      <div className="flex justify-between">
        <p>Found {data?.totalCount} results</p>
        <div className="flex gap-2 h-fit">
          <button
            onClick={() => setPageCount((prev) => prev - 1)}
            disabled={pageCount === 1}
          >
            ⬅️
          </button>
          <button
            onClick={() => setPageCount((prev) => prev + 1)}
            disabled={(data?.users.length || 0) < 30}
          >
            ➡️
          </button>
        </div>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : data?.users ? (
        <List users={data.users} />
      ) : null}
    </>
  );
}
