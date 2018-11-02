import React, { Fragment } from "react";
import PageHeader from "../template/pageHeader";
import Menu from "../template/menu";
import Container from "../template/Container";

import { TitleH3Laranja } from "../styles/styles";

const About = props => (
  <Fragment>
    <Menu />
    <PageHeader name="Sobre o Desafio" small="" />
    <Container colNum="col-md-12 text-center">
      <TitleH3Laranja>Desafio Front-End Geru</TitleH3Laranja>
      <p>
        Aplicação desenvolvida com ReactJs e inicializado com o Create React
        App.
      </p>
      <p>
        Construir uma SPA de lista de tarefas (To-Do List) usando uma stack de
        alta performance. Ob jetivo era construir uma SPA de lista de tarefas
        (To-Do List) usando uma stack de alta performance.
      </p>
      <TitleH3Laranja>Missão e Visão</TitleH3Laranja>

      <p>- Aenean quis est vitae ex mollis porttitor.</p>
      <p>- Quisque venenatis orci et vestibulum interdum.</p>
      <p>- Suspendisse sed magna sed ligula posuere cursus.</p>

      <TitleH3Laranja>Imprensa</TitleH3Laranja>
      <p>Lorem ipsum dolor sit amet...</p>
    </Container>
  </Fragment>
);

export default About;
