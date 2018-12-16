import React, { Component } from "react";
import { withFormik , Form , Field } from 'formik';
import * as yup from 'yup';
import * as actions from "./actions";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
 
let onSubmit = null;
export class Auth extends Component {

    constructor(props){
        super(props);
        this.state={
            isSignup:false
        }
      
        this.isAuthenticated = (isAuthenticated)=>{
            if(isAuthenticated){
                this.props.history.push("/burgerBuilder");
            }
        }
        this.switchAuthModeHandler = ()=>{
            this.setState(prevstate=>{
                return {
                    isSignup :!prevstate.isSignup
                };
            })
        }
        onSubmit = (values)=>{
            console.log(values); 
            this.props.onAuth(values.email,values.password,this.state.isSignup, this.isAuthenticated);
        }
        
    }

    componentDidMount(){
        this.props.onTryAutoSignUp(this.isAuthenticated);

    }
    render() {
        const { errors ,touched } = this.props;
        const errorClassName = 'text-left text-danger text-uppercase';
        let spinner = <Spinner />;
        let form = (  
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
                <button type="submit" className="button-primary d-block m-auto"> {this.state.isSignup ? 'Sign Up' : 'Sign In'} </button>
            </Form>
            <button onClick = {this.switchAuthModeHandler} className="d-block m-auto btn btn-link">{!this.state.isSignup? 'Do not have an account , switch to Sign Up':'Already have an account , switch to Sign In'}</button>
            </div>
        </div>);
         return  this.props.loading ? spinner : form;
  }
}

const mapStateToProps=(state)=>{
       return{
           loading:state.auth.loading,
           error : state.auth.error,
           isAuthenticated: state.auth.isAuthenticated
       }
}
const mapDispatchToProps = dispatch => {
    return {
      onAuth: (email,password, isSignup ,isAuthenticated) => dispatch(actions.auth(email,password,isSignup ,isAuthenticated)),
      onTryAutoSignUp : (isAuthenticated) => dispatch(actions.tryAutoSignUp(isAuthenticated))
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
})(connect( mapStateToProps, mapDispatchToProps )(Auth));
