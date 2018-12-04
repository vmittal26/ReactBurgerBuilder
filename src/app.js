import React from "react";
import "./sass/main.scss";
import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Checkout from "./container/Checkout/Checkout";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";
import Orders from "./container/Orders/Orders";
import Auth from "./container/Auth/Auth";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const App = () => (
  <Layout className="container" id="app">
    <Switch>
      <ProtectedRoute path="/burgerBuilder" exact component={BurgerBuilder} />
      <ProtectedRoute path="/checkout" component={Checkout} />
      <ProtectedRoute path="/orders" component={Orders} />
      <Route path="/" component={Auth} />
    </Switch>
  </Layout>
);

export default App;
