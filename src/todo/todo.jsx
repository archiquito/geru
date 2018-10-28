import React from "react";

import PageHeader from "../template/pageHeader";
import Menu from "../template/menu";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const Todo = props => (
  <div>
    <Menu />
    <PageHeader name="Tarefas" small=" Cadastro" />
    <TodoForm />
    <TodoList />
  </div>
);

Todo.displayName = "Todo";

export default Todo;
