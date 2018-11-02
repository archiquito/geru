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
      <TitleH3Laranja>Funções Implementadas</TitleH3Laranja>

      <p>- Inserção de Tarefa (add, edit, delete)</p>
      <p>- Marcar tarefa como concluída</p>
      <p>- Inserção de tags na tarefa (add, edit, delete)</p>

      <TitleH3Laranja>Recursos Usados</TitleH3Laranja>
      <p>- Reacjs</p>
      <p>- Bootstrap</p>
      <p>- Sass</p>
      <p>- Redux</p>
      <p>- Mockapi</p>
    </Container>
  </Fragment>
);

export default About;
