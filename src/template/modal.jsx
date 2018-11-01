import React, { Component } from "react";
import Tags from "../todo/tags";

export default class ModalTemplate extends Component {
  render() {
    const props = this.props;
    return (
      <div
        className="modal fade"
        id="modalTemplate"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{props.titulo}</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {props.texto}
              {props.children}
              <Tags />
            </div>
            {props.footer ? (
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Fechar
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
