import "./styles/unistyles";
import store from "@redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import checkLocalStorage from "@utils/handleLocalStorage";
import React, { useLayoutEffect } from "react";
import { Provider } from "react-redux";
import Routes from "./navigations/Routes";

const App = (): React.JSX.Element => {
  useLayoutEffect(() => {
    checkLocalStorage();
  }, []);

  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
