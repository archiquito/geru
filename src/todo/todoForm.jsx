import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//import Grid from "../template/grid";
import IconButton from "../template/iconButton";
import Container from "../template/Container";
import { changeDescription, add, clear, search } from "../actions/actions";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  keyHandler(e) {
    const props = this.props;
    if (e.key === "Enter") {
      console.log("ENTROU");
      if (e.shiftKey) {
        props.search();
      } else {
        console.log("ENTROU P ENVIAR", e.target.value);
        props.add(e.target.value);
      }
    } else if (e.key === "Escape") {
      props.clear();
    }
  }

  render() {
    const props = this.props;
    return (
      <Container colNum="col-md-12 text-center">
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Digite sua tarefa. Ex.: Comprar pão"
                onChange={e => props.changeDescription(e.target.value)}
                onKeyUp={e => this.keyHandler(e)}
                value={props.description}
              />
            </div>
            <div className="form-group col-md-6">
              <IconButton
                estilo="primary"
                icon="plus"
                onClick={() => props.add(props.description)}
              />
              <IconButton estilo="info" icon="search" onClick={search} />
              <IconButton
                estilo="default"
                icon="close"
                onClick={props.clear()}
              />
            </div>
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
  bindActionCreators({ changeDescription, add, clear, search }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
