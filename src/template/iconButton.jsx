import React, { Component } from "react";

export default class IconButton extends Component {
  render() {
    const props = this.props;
    return (
      <button className={`btn btn-${props.estilo}`} onClick={props.onClick}>
        <i className={`fa fa-${props.icon}`} />
      </button>
    );
  }
}
