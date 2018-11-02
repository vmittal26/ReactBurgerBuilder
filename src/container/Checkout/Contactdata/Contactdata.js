import React, { Component } from "react";
import axios_instance from "../../../axios_order";
import Spinner from "../../../components/UI/Spinner/Spinner";
import ContactForm from "./ContactForm";

export default class Contactdata extends Component {
  constructor(props) {
    super(props);

    this.state={
      loading:false
    }
    this.onOrderSubmit = (formData) => {
      this.setState({ loading: true });

      const order = {
        ingredients:this.props.ingredients,
        price : this.props.price,
        customer: {
          name: formData.name,
          adress: formData.address,
          email: formData.email
        }
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
     <ContactForm onSubmit = {(this.onOrderSubmit)}/>
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
