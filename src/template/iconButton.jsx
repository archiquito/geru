import React from "react";
import If from "./if";

const iconButton = props => (
  <If test={!this.props.hide}>
    <button
      className={`btn btn-${this.props.estilo}`}
      onClick={this.props.onClick}
    >
      <i className={`fa fa-${this.props.icon}`} />
    </button>
  </If>
);
iconButton.displayName = "iconButton";

export default iconButton;
