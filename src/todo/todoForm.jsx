import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import { add, changeDescription, search, clear } from "./todoActions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  componentDidMount() {
    search();
  }

  keyHandler(e) {
    const props = this.props;
    if (e.key === "Enter") {
      if (e.shiftKey) {
        props.search();
      } else {
        props.add(props.description);
      }
    } else if (e.key === "Escape") {
      props.clear();
    }
  }

  render() {
    const props = this.props;
    return (
      <div role="form" className="todoForm">
        <Grid cols="12 9 10">
          <input
            id="description"
            className="form-control"
            placeholder="Adicione uma tarefa"
            onChange={props.changeDescription}
            onKeyUp={this.keyHandler}
            value={props.description}
          />
        </Grid>
        <Grid cols="12 3 2">
          <IconButton
            estilo="primary"
            icon="plus"
            onClick={() => add(props.description)}
          />
          <IconButton estilo="info" icon="search" onClick={search} />
          <IconButton estilo="default" icon="close" onClick={props.clear} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({ description: state.todo.description });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      add,
      changeDescription,
      search,
      clear
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
