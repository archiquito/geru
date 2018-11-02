import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { WithContext as ReactTags } from "react-tag-input";
import { tagAdd, deleteTag } from "../actions/actions";

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

class TagsComponent extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
  }

  handleDelete(i) {
    const props = this.props;
    console.log(i);
    console.log(props.tags[i].idTag);
    props.deleteTag(props.tags[i].idTag, props.idDescription);
  }

  handleAddition(tag) {
    const props = this.props;
    console.log(tag.text);
    console.log(props.tags.id);
    console.log(props.idDescription);
    props.tagAdd(props.idDescription, tag.text);

    //this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleDrag(tag, currPos, newPos) {
    const props = this.props;
    const tags = [...props.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    //this.setState({ tags: newTags });
  }

  handleTagClick(index) {
    console.log("The tag at index " + index + " was clicked");
  }

  render() {
    const props = this.props;
    return (
      <Fragment>
        <ReactTags
          tags={props.tags}
          placeholder="Adicione tags para sua tarefa"
          delimiters={delimiters}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          handleTagClick={this.handleTagClick}
        />
        <small>
          Aperte a tecla <code>enter</code> para inserir a teg
        </small>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tags: state.todo.tags,
  idDescription: state.todo.idDescription
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ tagAdd, deleteTag }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsComponent);
