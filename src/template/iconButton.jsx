import React, { Component } from "react";
import If from "./if";

export default class IconButton extends Component {
  render() {
    const props = this.props;
    return props.toggleModal ? (
      <button
        className={`btn btn-${props.estilo}`}
        data-toggle={props.toggleModal}
        data-target={props.targetModal}
      >
        <i className={`fa fa-${props.icon}`} /> {props.texto}
      </button>
    ) : (
      <If test={!props.hide}>
        <button
          className={`btn btn-${props.estilo}`}
          onClick={() => props.onClick()}
          data-toggle={props.toggleModal}
          data-target={props.targetModal}
        >
          <i className={`fa fa-${props.icon}`} /> {props.texto}
        </button>
      </If>
    );
  }
}
