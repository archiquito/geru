import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//import Grid from "../template/grid";
//import IconButton from "../template/iconButton";
import Container from "../template/Container";
import * as ActionCreators from "../actions/actions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
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
    //const props = this.props;
    return (
      <Container colNum="col-md-12 text-center">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Digite sua tarefa. Ex.: Comprar pão"
            />
          </div>
        </form>
        {/* <Grid cols="12 9 10">
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
        </Grid> */}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  description: state.getlistApi.description
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ ActionCreators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
