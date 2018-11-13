import React, { Component } from "react";
import { withFormik , Form , Field } from 'formik';
import * as yup from 'yup';
import * as actions from "./actions";
import { connect } from "react-redux";
import axios from 'axios';
 
let onSubmit = null;
export class Auth extends Component {

    constructor(props){
        super(props);
        onSubmit = (values)=>{
            console.log(values);
            this.props.onAuth(values.email,values.password);
      }
    }
 
  render() {
    const { errors ,touched } = this.props;
    const errorClassName = 'text-left text-danger text-uppercase';
    return (
        <div className="card mr-auto ml-auto" style={{width: '60%',marginTop:'6rem'}}>
         <div className="card-header">
              Sign Up
        </div>
            <div className="card-body" >
            <Form >
                <div className="form-group">
                    {touched.email &&errors.email && <div className={errorClassName}>{errors.email}</div>}
                    <Field type="email" name="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                    {touched.password && errors.password && <div className={errorClassName}>{errors.password}</div>}
                    <Field type="password" name="password" className="form-control" placeholder="Password" />
                </div>
                <button type="submit" className="button-primary mt-1 d-block m-auto"> Submit </button>
           </Form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
      onAuth: (email,password) => dispatch(actions.auth(email,password))
    };
  };



export default withFormik({
    mapPropsToValues(){
        return {
            email:'',
            password:'',
        }
    },
    validationSchema:yup.object().shape({
        password:yup.string().required(),
        email:yup.string().email().required()
    }),
    handleSubmit(values){
        onSubmit(values);
    }
})(connect( null, mapDispatchToProps )(Auth));
