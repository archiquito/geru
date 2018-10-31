// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// import IconButton from "../template/iconButton";
// import {
//   changeDescription,
//   remove,
//   markAsDone,
//   markAsPending
// } from "../actions/actions";

// import Container from "../template/Container";

// class TodoList extends Component {
//   renderRows = () => {
//     const props = this.props;
//     console.log("PROPSLIST ", props.list);
//     return props.list.map(todo => (
//       <tr key={todo.id}>
//         <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
//         <td>
//           <IconButton
//             estilo="success"
//             icon="check"
//             hide={todo.done}
//             onClick={() => props.markAsDone(todo)}
//           />
//           <IconButton
//             estilo="warning"
//             icon="undo"
//             hide={!todo.done}
//             onClick={() => props.markAsPending(todo)}
//           />
//           <IconButton
//             estilo="danger"
//             icon="trash-o"
//             hide={!todo.done}
//             onClick={() => props.remove(todo)}
//           />
//         </td>
//       </tr>
//     ));
//   };

//   render() {
//     return (
//       <Container colNum="col-md-12">
//         <table className="table">
//           <thead>
//             <tr>
//               <th style={{ width: "70%" }}>Descrição</th>
//               <th className="tableActions" style={{ width: "30%" }}>
//                 Ações
//               </th>
//             </tr>
//           </thead>
//           <tbody>{this.renderRows()}</tbody>
//         </table>
//       </Container>
//     );
//   }
// }

// const mapStateToProps = state => ({ list: state.todo.list });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       changeDescription,
//       remove,
//       markAsDone,
//       markAsPending
//     },
//     dispatch
//   );
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList);

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Container from "../template/Container";
import IconButton from "../template/iconButton";
import { markAsDone, markAsPending, remove } from "../actions/actions";

class TodoList extends Component {
  renderRows = () => {
    const props = this.props;
    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo.id}>
        <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
        <td>
          <IconButton
            estilo="success"
            icon="check"
            hide={todo.done}
            onClick={() => props.markAsDone(todo)}
          />
          <IconButton
            estilo="warning"
            icon="undo"
            hide={!todo.done}
            onClick={() => props.markAsPending(todo)}
          />
          <IconButton
            estilo="danger"
            icon="trash-o"
            hide={!todo.done}
            onClick={() => props.remove(todo)}
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
              <th className="tableActions" style={{ width: "30%" }} />
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
        </table>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ list: state.todo.list });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
