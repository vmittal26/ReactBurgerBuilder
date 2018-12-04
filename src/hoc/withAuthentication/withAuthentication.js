import React, { Component } from 'react'
import { connect } from 'react-redux';

export default function(WrappedComponent){

    class Authenticate extends Component{
        
        componentDidMount(){
            if(!this.props.isAuthenticated){
                this.props.history.replace("/");
            }
        }
        render(){
               return this.props.isAuthenticated ? <WrappedComponent {...this.props}/> : null ;
        }
    }
   
   const mapStateToProps = state => {
       return {
           isAuthenticated: state.auth.isAuthenticated 
       };
   };
   return connect(mapStateToProps, null )(Authenticate);
}

