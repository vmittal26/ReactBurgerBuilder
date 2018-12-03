import ReactDOM from "react-dom";
import React from "react";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import burgerbuilderReducer from "./container/BurgerBuilder/reducers";
import authReducer from "./container/Auth/reducers";
import redux_thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  burgerBuilder:burgerbuilderReducer,
  auth:authReducer
});
const store = createStore(
  rootReducer, composeEnhancers(applyMiddleware(redux_thunk))
);
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("app"));
