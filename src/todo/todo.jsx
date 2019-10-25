import React, { Fragment } from "react";

import PageHeader from "../template/pageHeader";
import Menu from "../template/menu";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const Todo = props => (
  <Fragment>
    <Menu />
    <PageHeader name="Tarefas" small=" Cadastro" />
    <TodoForm />
    <TodoList />
  </Fragment>
);

export default Todo;
 