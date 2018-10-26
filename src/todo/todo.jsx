import React from "react";

import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const Todo = props => (
  <div>
    <PageHeader name="Tarefas" small="Cadastro" />
    <TodoForm />
    <TodoList />
  </div>
);

Todo.displayName = "Todo";

export default Todo;
