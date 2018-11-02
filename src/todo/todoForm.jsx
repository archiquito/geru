import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ModalTemplate from "../template/modal";
import Container from "../template/Container";
import IconButton from "../template/iconButton";
import { add, changeDescription, search, clear } from "../actions/actions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  componentDidMount() {
    const props = this.props;
    props.search();
  }

  keyHandler(e) {
    const props = this.props;
    if (e.key === "Enter") {
      console.log("ENTROU");
      if (e.shiftKey) {
        props.search();
      } else {
        console.log("ENTROU P ENVIAR", props.description);
        props.add(props.description);
      }
    } else if (e.key === "Escape") {
      props.clear();
    }
  }

  render() {
    const props = this.props;
    return (
      <Fragment>
        <Container colNum="col-md-12 text-center">
          <div className="form-row">
            <div className="form-group col-md-12">
              <IconButton
                hide={true}
                estilo="primary"
                icon="plus"
                texto="Adicionar nova tarefa"
                toggleModal="modal"
                targetModal="#modalAdicionar"
                onClick={() => props.clear()}
              />
            </div>
          </div>
        </Container>
        <ModalTemplate
          targetModal={"modalAdicionar"}
          titulo={"Acione nova tarefa"}
        >
          <div className="w-100 form-group">
            <input
              id="description"
              className="form-control"
              placeholder={
                props.erroDesc
                  ? props.erroDesc
                  : "Não pode inserir tarefa em branco!"
              }
              onChange={props.changeDescription}
              onKeyUp={this.keyHandler}
              value={props.description}
            />
            <IconButton
              estilo="primary"
              icon="plus"
              texto="Gravar"
              toggleModal=""
              onClick={() => props.add(props.description)}
            />
          </div>
        </ModalTemplate>
      </Fragment>
    );
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
)(TodoForm);
