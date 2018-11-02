import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { add, changeDescription, search, clear } from "../actions/actions";

class ErrorBoundary extends Component {
  constructor(props) {
    super();
    this.state = { error: null, errorInfo: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const props
    props.hasError(true)
  };
  componentDidCatch(error, info) {
    this.setState({
      error,
      info
    });
  }
  render() {
    if (this.state.error) {
      return (
        <Fragment>
          {this.props.name ? (
            <h3 style={styles}>
              Sorry Something went wrong on {this.props.name}!
            </h3>
          ) : (
            <h3 style={styles}>Sorry Something went wrong!</h3>
          )}
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>{this.state.info.componentStack}</p>
        </Fragment>
      );
    }
    return this.props.children;
  }
}

const mapStateToProps = state => ({
  description: state.todo.description,
  erroDesc: state.todo.erroDesc
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ add, changeDescription, search, clear }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorBoundary);
