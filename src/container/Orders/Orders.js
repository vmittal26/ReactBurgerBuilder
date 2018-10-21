import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios_instance from "../../axios_order";

export default class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: null
    };
  }
  componentDidMount() {
    axios_instance
      .get("/orders.json")
      .then(res => {
        // console.log(res.data);
        this.setState({ orders: [ ...this.createOrdersArray(res.data) ] });
      })
      .catch(error => console.log(error));
  }
  createOrdersArray(data) {
    let fetchedOrders = [];
    for (let key in data) {
      fetchedOrders.push({
        id: key,
        ingredients: data[key].ingredients,
        price: data[key].price
      });
    }
    return fetchedOrders;
  }
  render() {
    return (
      <div className="container">
        {this.state.orders!=null ?this.state.orders.map((order)=><Order key={order.id} {...order} />):null}
      </div>
    );
  }
}
