import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import IconButton from "../template/iconButton";
import * as ActionCreators from "../actions/actions";

import Container from "../template/Container";

class TodoList extends Component {
  componentDidMount() {
    ActionCreators.getApiList();
  }

  renderRows = () => {
    const props = this.props;
    console.log("PROPSLIST ", props.list);
    return props.list.map(todo => (
      <tr key={todo.id}>
        <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
        <td>
          <IconButton
            estilo="success"
            icon="check"
            hide={todo.done}
            onClick={() => ActionCreators.markAsDone(todo)}
          />
          <IconButton
            estilo="warning"
            icon="undo"
            hide={!todo.done}
            onClick={() => ActionCreators.markAsPending(todo)}
          />
          <IconButton
            estilo="danger"
            icon="trash-o"
            hide={!todo.done}
            onClick={() => ActionCreators.remove(todo)}
          />
        </td>
      </tr>
    ));
  };

  render() {
    return (
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
    );
  }
}

const mapStateToProps = state => ({ list: state.getlistApi.list });

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators.getApiList, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
