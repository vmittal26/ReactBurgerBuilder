import React from "react";
import "./sass/main.scss";
import Layout from "./components/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Checkout from "./container/Checkout/Checkout";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";
import Orders from "./container/Orders/Orders";
import Auth from "./container/Auth/Auth";

const App = () => (
  <Layout className="container" id="app">
    <Switch>
      <Route path="/burgerBuilder" exact component={BurgerBuilder} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/orders" component={Orders} />
      <Route path="/" component={Auth} />
    </Switch>
  </Layout>
);

export default App;
