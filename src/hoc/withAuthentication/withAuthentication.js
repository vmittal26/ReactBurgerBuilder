import React, { Component } from 'react'
import { connect } from "react-redux";

const withAuthentication = (props) => {

    let isAuthenticated = props.isAuthenticated;

    return class withAuthentication extends Component {

        render() {
            return isAuthenticated ? <props.component { ...this.props } /> : null;
          }
  
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated 
    };
  };

export default connect(mapStateToProps, null )(withAuthentication);