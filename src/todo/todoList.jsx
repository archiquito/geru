import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Tags from "../todo/tags";
import ModalTemplate from "../template/modal";
import Container from "../template/Container";
import IconButton from "../template/iconButton";
import { TitleH3Laranja } from "../styles/styles";

import {
  markAsDone,
  markAsPending,
  remove,
  getDesc,
  addEdit,
  changeDescriptionEdit,
  search,
  clear
} from "../actions/actions";

class TodoList extends Component {
  renderRows = () => {
    const props = this.props;
    if (!props.hasError) {
      const list = props.list || [];

      return list.map(todo => (
        <tr key={todo.id}>
          <td className={todo.done ? "markedAsDone" : ""}>
            {todo.description}
            <div className="ReactTags__tags react-tags-wrapper">
              <div className="ReactTags__selected">
                {todo.tags.length > 0
                  ? todo.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="tag-wrapper ReactTags__tag"
                        draggable="true"
                      >
                        {tag.text}
                      </span>
                    ))
                  : null}
              </div>
            </div>
          </td>
          <td>
            <IconButton
              title="Concluída"
              estilo="success"
              icon="check"
              hide={todo.done}
              onClick={() => props.markAsDone(todo.id)}
            />
            <IconButton
              title="Editar"
              estilo="info"
              icon="pencil"
              hide={!todo.done}
              toggleModal="modal"
              targetModal="#modalEditar"
              onClick={() => props.getDesc(todo.id)}
            />
            <IconButton
              title="Não Concluída"
              estilo="warning"
              icon="undo"
              hide={!todo.done}
              onClick={() => props.markAsPending(todo.id)}
            />
            <IconButton
              title="Excluir"
              estilo="danger"
              icon="trash-o"
              hide={!todo.done}
              onClick={() => props.remove(todo)}
            />
          </td>
        </tr>
      ));
    } else {
      return (
        <tr key="erro">
          <td className="erro">
            <TitleH3Laranja>OPS! Alguma coisa está errada.</TitleH3Laranja>
            <p>{props.infoError}</p>
          </td>
        </tr>
      );
    }
  };
  render() {
    const props = this.props;
    return (
      <Fragment>
        <Container colNum="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "70%" }}>Descrição</th>
                <th className="tableActions" style={{ width: "30%" }}>
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
        </Container>
        <ModalTemplate targetModal="modalEditar" titulo={"Editar tarefa"}>
          <div className="w-100 form-group">
            <input
              id="descriptionEdit"
              className="form-control"
              value={props.descriptionEdit}
              placeholder={
                props.erroDesc
                  ? props.erroDesc
                  : "Não pode inserir tarefa em branco!"
              }
              onChange={props.changeDescriptionEdit}
              onKeyUp={this.keyHandler}
            />
            <IconButton
              estilo="info"
              icon="pencil"
              texto="Editar"
              toggleModal=""
              onClick={() =>
                props.addEdit(props.descriptionEdit, props.idDescription)
              }
            />
          </div>
          <Tags />
        </ModalTemplate>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  erroDesc: state.todo.erroDesc,
  list: state.todo.list,
  descriptionEdit: state.todo.descriptionEdit,
  idDescription: state.todo.idDescription,
  hasError: state.todo.hasError,
  infoError: state.todo.infoError
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      markAsDone,
      markAsPending,
      remove,
      getDesc,
      addEdit,
      changeDescriptionEdit,
      search,
      clear
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
