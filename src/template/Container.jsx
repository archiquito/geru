import React, { Component } from "react";

export default class Container extends Component {
  render() {
    const props = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className={props.colNum}>{props.children}</div>
        </div>
      </div>
    );
  }
}
