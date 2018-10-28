import React, { Component } from "react";

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

export default PageHeader;
