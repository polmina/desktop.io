import { Routes } from "routes";
import { createStore } from "redux";
import { Provider } from "react-redux";
import store from "./store";
const storeState = createStore(store);

export const App = () => {
  return (
    <Provider store={storeState}>
      <Routes />
    </Provider>
  );
};
