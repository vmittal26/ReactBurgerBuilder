import ReactDOM from "react-dom";
import React from "react";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import burgerbuilderReducer from "./container/BurgerBuilder/Reducers/burderBuilderReducer";

const store = createStore(
  burgerbuilderReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("app"));
