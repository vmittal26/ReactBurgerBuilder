import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import * as actions from "./actions";
import { connect } from "react-redux";

class Logout extends Component {
  render() {
    return <Redirect to="/" />;
  }

  componentDidMount() {
    this.props.onLogout();
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => {
      dispatch(actions.onLogout());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Logout);
