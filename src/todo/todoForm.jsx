// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

// //import Grid from "../template/grid";
// import IconButton from "../template/iconButton";
// import Container from "../template/Container";
// import { changeDescription, add, clear, search } from "../actions/actions";

// class TodoForm extends Component {
//   constructor(props) {
//     super(props);
//     this.keyHandler = this.keyHandler.bind(this);
//   }

//   componentDidMount() {
//     const props = this.props;
//     props.search();
//   }

//   keyHandler(e) {
//     const props = this.props;
//     if (e.key === "Enter") {
//       console.log("ENTROU");
//       if (e.shiftKey) {
//         props.search();
//       } else {
//         console.log("ENTROU P ENVIAR", props.description);
//         props.add(props.description);
//       }
//     } else if (e.key === "Escape") {
//       props.clear();
//     }
//   }

//   render() {
//     const props = this.props;
//     return (
//       <Container colNum="col-md-12 text-center">
//         <form>
//           <div className="form-row">
//             <div className="form-group col-md-6">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Digite sua tarefa. Ex.: Comprar pão"
//                 onChange={props.changeDescription}
//                 onKeyUp={this.keyHandler}
//                 value={props.description}
//               />
//             </div>
//             <div className="form-group col-md-6">
//               <IconButton
//                 estilo="primary"
//                 icon="plus"
//                 onClick={() => props.add(props.description)}
//               />
//               <IconButton
//                 estilo="info"
//                 icon="search"
//                 onClick={props.search()}
//               />
//               <IconButton
//                 estilo="default"
//                 icon="close"
//                 onClick={props.clear()}
//               />
//             </div>
//           </div>
//         </form>
//       </Container>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   description: state.todo.description
// });
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ changeDescription, add, clear, search }, dispatch);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoForm);

import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ModalTemplate from "../template/modal";
import Container from "../template/Container";
import IconButton from "../template/iconButton";
import { add, changeDescription, search, clear } from "./todoActions";

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
                estilo="primary"
                icon="plus"
                texto="Adicionar nova tarefa"
                toggleModal="modal"
                targetModal="#modalTemplate"
              />
              {/* <IconButton
                estilo="info"
                toggleModal=""
                icon="search"
                onClick={search}
              />
              <IconButton
                estilo="default"
                toggleModal=""
                icon="close"
                onClick={props.clear}
              /> */}
            </div>
          </div>
        </Container>
        <ModalTemplate titulo={"Acione nova tarefa"}>
          <div className="w-100 form-group">
            <input
              id="description"
              className="form-control"
              placeholder="Adicione uma tarefa"
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

const mapStateToProps = state => ({ description: state.todo.description });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ add, changeDescription, search, clear }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
