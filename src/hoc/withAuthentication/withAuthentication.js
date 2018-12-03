import React, { Component } from 'react'
import { connect } from "react-redux";

const withAuthentication = (WrappedComponent) => {
    return class extends Component {
        render() {
            return props.isAuthenticated ? <WrappedComponent { ...this.props } /> : null;
        }
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated 
    };
  };

export default connect(mapStateToProps, null )(withAuthentication);