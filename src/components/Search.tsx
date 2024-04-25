import { Dispatch, FormEvent, SetStateAction } from "react";

const Searchbar = ({
  setUserSearch,
}: {
  setUserSearch: Dispatch<SetStateAction<string>>;
}) => {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const input = formData.get("search") as string;
    setUserSearch(input);
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset role="group">
        <input type="text" name="search" placeholder="Search..." />
        <button type="submit">Search</button>
      </fieldset>
    </form>
  );
};

export default Searchbar;
