import React from "react";
import "./sass/main.scss";
import Layout from "./components/Layout/Layout";
import { Route } from 'react-router-dom';
import Checkout from "./container/Checkout/Checkout";
import BurgerBuilder from "./container/BurgerBuilder/BurgerBuilder";
import Orders from "./container/Orders/Orders";

const App = () => (
  <Layout className="container" id="app">
      <Route path ="/" exact component={BurgerBuilder}/>
      <Route path ="/checkout" component={Checkout}/>
      <Route path ="/orders" component={Orders}/>
  </Layout>
);

export default App;
