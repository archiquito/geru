import React, { Fragment } from "react";
import PageHeader from "../template/pageHeader";

const about = props => (
  <Fragment>
    <PageHeader name="Sobre" small="Nós" />
    <h2>Nossa História</h2>
    <p>Lorem ipsum dolor sit amet...</p>
    <h2>Missão e Visão</h2>
    <p>Lorem ipsum dolor sit amet...</p>
    <h2>Imprensa</h2>
    <p>Lorem ipsum dolor sit amet...</p>
  </Fragment>
);

about.displayName = "about";

export default about;
