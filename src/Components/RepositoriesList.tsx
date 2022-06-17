import { useState } from "react";
import { useSelector } from "../Hooks/useTypedSelector";
import { useActions } from "../Hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useSelector((state) => state.repositories);


  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  }

  return (
  <div>
    <form onSubmit={onSubmit}>
      <input onChange={ e => setTerm(e.target.value) } placeholder="Search for a package" />
      <button type="submit">Search</button>
    </form>
    {error && <h2>{error}</h2>}
    {loading && <h2>Loading...</h2>}
    {!error && !loading && data && data.map((name, state) => <div key={state}>{name}</div>)}
  </div>
  );
}

export default RepositoriesList;
