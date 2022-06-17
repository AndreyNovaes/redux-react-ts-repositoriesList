import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "../stateRedux/store";
import RepositoriesList from "./RepositoriesList";


const Index = () => {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <RepositoriesList />
      </Provider>
    </ChakraProvider>
  );
}

export default Index;
