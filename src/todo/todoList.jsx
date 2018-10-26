import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import IconButton from "../template/iconButton";
import { markAsDone, markAsPending, remove } from "./todoActions";

const TodoList = props => {
  const renderRows = () => {
    const list = this.props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
        <td>
          <IconButton
            estilo="success"
            icon="check"
            hide={todo.done}
            onClick={() => markAsDone(todo)}
          />
          <IconButton
            estilo="warning"
            icon="undo"
            hide={!todo.done}
            onClick={() => markAsPending(todo)}
          />
          <IconButton
            estilo="danger"
            icon="trash-o"
            hide={!todo.done}
            onClick={() => remove(todo)}
          />
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapStateToProps = state => ({ list: state.todo.list });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
