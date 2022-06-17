import { Provider } from "react-redux";
import { store } from "../stateRedux/store";
import RepositoriesList from "./RepositoriesList";


const Index = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
}

export default Index;
