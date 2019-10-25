import React, { Component } from "react";
import PropTypes from 'prop-types';

import { PageTitle } from "../styles/styles";

class PageHeader extends Component {

  render() {
    const props = this.props;

    return (
      <PageTitle>
        <h1>
          <b>
            {props.name}
            <small>{props.small}</small>
          </b>
        </h1>
      </PageTitle>
    );
  }
}

PageHeader.propTypes = {
  name: PropTypes.any,
  small: PropTypes.any
};
export default PageHeader; 
