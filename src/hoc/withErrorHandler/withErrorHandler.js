import React, { Component } from "react";
import ElementsWrapper from "../ElementsWrapper";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null
      };

      this.onBackdropClick = () => {
        this.setState({ error: null });
      };
    }

    componentWillMount() {
      this.requestInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.responseInterceptor = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error });
          return Promise.reject(error);
        }
      );
    }

    componentWillUnmount(){
        axios.interceptors.request.eject(this.requestInterceptor);
        axios.interceptors.response.eject(this.responseInterceptor);
    }
    render() {
      return (
        <React.Fragment>
          <Modal show={this.state.error} onBackdropClick={this.onBackdropClick}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default withErrorHandler;
