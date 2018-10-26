import React from "react";

const pageHeader = props => (
  <header className="page-header">
    <h2>
      {this.props.name}
      <small>{this.props.small}</small>
    </h2>
  </header>
);

pageHeader.displayName = "pageHeader";

export default pageHeader;
