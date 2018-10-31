import React, { Component } from "react";
import If from "./if";

export default class IconButton extends Component {
  render() {
    const props = this.props;
    return (
      <If test={!props.hide}>
        <button
          className={`btn btn-${props.estilo}`}
          onClick={() => props.onClick()}
        >
          <i className={`fa fa-${props.icon}`} />
        </button>
      </If>
    );
  }
}
