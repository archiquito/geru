import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import IconButton from "../template/iconButton";
import * as ActionCreators from "../actions/actions";

class TodoList extends Component {
  componentDidMount() {
    ActionCreators.getApiList();
  }

  renderRows = () => {
    const props = this.props;

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
      <table className="table">
        <thead>
          <tr>
            <th>Descrição</th>
            <th className="tableActions">Ações</th>
          </tr>
        </thead>
        <tbody>sasas</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return { list: state.getlistApi.list };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
