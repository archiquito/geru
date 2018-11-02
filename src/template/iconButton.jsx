import React, { Component, Fragment } from "react";
import If from "./if";
import ReactTooltip from "react-tooltip";

export default class IconButton extends Component {
  render() {
    const props = this.props;
    return props.toggleModal ? (
      <If test={props.hide}>
        <Fragment>
          <button
            data-tip={props.title}
            className={`btn btn-${props.estilo}`}
            data-toggle={props.toggleModal}
            data-target={props.targetModal}
            onClick={() => props.onClick()}
          >
            <i className={`fa fa-${props.icon}`} /> {props.texto}
          </button>
          <ReactTooltip />
        </Fragment>
      </If>
    ) : (
      <If test={!props.hide}>
        <Fragment>
          <button
            data-tip={props.title}
            className={`btn btn-${props.estilo}`}
            onClick={() => props.onClick()}
            data-toggle={props.toggleModal}
            data-target={props.targetModal}
          >
            <i className={`fa fa-${props.icon}`} /> {props.texto}
          </button>
          <ReactTooltip />
        </Fragment>
      </If>
    );
  }
}
