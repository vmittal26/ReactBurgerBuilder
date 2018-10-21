import React, { Component } from "react";
import axios_instance from "../../../axios_order";
import Spinner from "../../../components/UI/Spinner/Spinner";

export default class Contactdata extends Component {
  constructor(props) {
    super(props);

    this.state={
      loading:false
    }
    this.onOrderSubmit = event => {
      event.preventDefault();
      this.setState({ loading: true });

      const order = {
        ingredients:this.props.ingredients,
        price : this.props.price,
        customer: {
          name: "Vaibhav Mittal",
          adress: {
            flat: "C 202",
            address1: "Prateek Wisteria",
            address2: "Sector 77",
            pincode: 201301,
            city: "Noida",
            country: "India"
          },
          email: "vaibhavmittal.26@gmai.com"
        },
        deliveryMethod: "fastest"
      };
      axios_instance
        .post("/orders.json", order)
        .then(response => {
          console.log(response);
          this.setState({loading: false});
          this.props.history.push("/");
        })
        .catch(error => {
          console.log(error);
          this.setState({loading: false});
          this.props.history.push("/");
        });
    }
  }
  render() {

    let form = (
      <form onSubmit={this.onOrderSubmit} className="form-group">
      <input type="text" className="form-control" placeholder="Name" />
      <input type="email" className="form-control" placeholder="Email" />
      <input
        type="text"
        className="form-control"
        placeholder="Address Line1"
      />
      <input
        type="text"
        className="form-control"
        placeholder="Address Line2"
      />
      <input type="text" className="form-control" placeholder="Zip Code" />
      <button type="submit" className="button-primary mt-1">
        Order
      </button>
    </form>
    );
    if(this.state.loading){
      form=<Spinner />
    }
    return (
      <div className="Contactdata">
        <h1 className="font-weight-bold">Enter your contact Details !</h1>
        {form}
      </div>
    );
  }
}
